import { NextResponse } from 'next/server';
import Joi from 'joi';
import nodemailer from 'nodemailer';

type Body = {
  captcha?: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const schema = Joi.object({
  firstName: Joi.string().trim().max(30).required().messages({
    'string.empty': 'le champs est requis',
  }),
  lastName: Joi.string().trim().max(30).required().messages({
    'string.empty': 'le champs est requis',
    'string.max': 'votre nom ne peut pas faire plus de 30 charactères',
  }),
  email: Joi.string().trim().email().messages({
    'string.empty': 'le champs est requis',
    'string.email': 'votre adresse email doit-être valide',
  }),
  company: Joi.string().trim().min(0).max(50).messages({
    'string.max': 'votre companie ne peut pas faire plus de 50 charactères',
  }),
  message: Joi.string().trim().required().max(1500),
});

export async function POST(req: Request) {
  const { captcha, ...body }: Body = await req.json();
  const result = schema.validate(body, { abortEarly: false });
  const errors: string[] = [];

  if (result.error) {
    result.error.details.forEach(function (detail) {
      detail.path.forEach((path) => errors.push(String(path)));
    });
  }

  if (errors.length) {
    return NextResponse.json(
      {
        errors,
      },
      {
        status: 400,
      }
    );
  }

  if (!captcha) {
    return NextResponse.json(
      {
        error: 'Unproccesable request, please provide the required fields',
      },
      { status: 422 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_MAIL_USER,
      pass: process.env.GOOGLE_MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GOOGLE_MAIL_USER,
      to: process.env.GOOGLE_MAIL_USER,
      replyTo: result.value.email,
      subject: `Contact depuis le formulaire du portfolio de ${result.value.firstName} ${result.value.lastName}`,
      html: `
        <p>Nom : ${result.value.lastName}</p>
        <p>Prénom : ${result.value.firstName}</p>
        <p>Email : ${result.value.email}</p>
        <p>Companie/Société : ${result.value.companie ?? 'non renseigné'}</p>
        <p>Message : ${result.value.message}</p>
      `,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'something went wrong',
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json(
    {
      message: 'succes',
    },
    { status: 200 }
  );
}

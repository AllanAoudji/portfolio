import Drawer from './Drawer';
import DrawerBackground from './DrawerBackground';

type Props = {
  open: boolean;
};

function DrawerContainer({ open }: Props) {
  return (
    <div
      className={`fixed h-screen left-0 top-0 w-screen z-50 ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <DrawerBackground open={open} />
      <Drawer open={open} />
    </div>
  );
}

export default DrawerContainer;

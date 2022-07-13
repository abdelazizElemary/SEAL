type Props = React.PropsWithChildren;

const PageNavbar: React.FC<Props> = ({ children }) => {
  return (
    <div>
      trial
      <div>{children}</div>
    </div>
  );
};
export default PageNavbar;

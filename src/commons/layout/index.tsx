interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <div>
        <div>
          {/* 헤더 */}
          {/* 베너 */}
        </div>
        <div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
}

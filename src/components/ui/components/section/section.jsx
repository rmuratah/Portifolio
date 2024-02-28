const Section = ({ ...props }) => {
  const style = {
    backgroundColor: "#141414",
    height: "100vh",
  };

  return <section style={style}>{props.children}</section>;
};

export default Section;

const Section = ({ color, ...props }) => {

    const style = {
        backgroundColor: `${color}`,
        height: '100vh',
    };

    return (
        <section style={style}>
            {props.children}
        </section>
    );
}

export default Section;

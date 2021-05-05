const Preview = props => {
    console.log(props);
    return (
        <div {...props} className="w-full">
            {props.children}
        </div>
    );
};

export default Preview;

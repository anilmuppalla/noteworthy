const Preview = props => {
    return (
        <div {...props} className="flex flex-col gap-2">
            {props.children}
        </div>
    );
};

export default Preview;

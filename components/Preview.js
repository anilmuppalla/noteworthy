const Preview = props => {
    return (
        <div {...props} className="flex flex-col gap-2 markdown">
            {props.children}
        </div>
    );
};

export default Preview;

const Preview = props => {
    console.log(props);
    return (
        <div {...props} className="flex flex-col w-full gap-2 ">
            {props.children}
        </div>
    );
};

export default Preview;

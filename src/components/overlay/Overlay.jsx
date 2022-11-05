export const Overlay = ({ children, ...args }) => {
    return (
        <div className="overlay" {...args}>
            {children}
        </div>
    );
};

import './Menu.css';
import MenuItem from "./MenuItem";
function Menu(){
    const menuItems = [
        { title: "Demos",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Post",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Features",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Categories",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Shop",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
        {
            title: "Buy Now",
            link: "#",
            children: [
                { title: "Post Header", link: "" },
                { title: "Post Layout", link: "" },
                { title: "Share Buttons", link: "" },
                { title: "Gallery Post", link: "" },
                { title: "Video Post", link: "" },
            ],
        },
    ];
    return(
        <ul className="menu df j-center">
            {menuItems.map((item, id) =>(
                <MenuItem  key={id} item={item} />
            ))}
        </ul>
    )
}
export default Menu
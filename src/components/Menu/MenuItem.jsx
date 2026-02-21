function MenuItem({item}){
    const hasChildren = item.children && item.children.length > 0;
    return(
        <li  className={hasChildren ? "menu__item has-sub" : "menu__item"}>
            <a className='menu__link' href={item.link}>{item.title}</a>
            {hasChildren && (
                <ul className='menu-sub'>
                    {item.children.map((child, id) => (
                        <MenuItem key={id} item={child}/>
                    ))}
                </ul>
            )}

        </li>
    )
}
export default MenuItem
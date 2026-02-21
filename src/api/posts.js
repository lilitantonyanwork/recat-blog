export const fetchPosts = async () => {
    const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
    return res.json();
};
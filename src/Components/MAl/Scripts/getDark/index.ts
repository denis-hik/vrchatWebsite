export const getDark = () => {
    const date = new Date();
    return (date.getHours() > 18 || date.getHours() < 7)
}
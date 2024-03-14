export default function Tabs({buttons,children,buttonsCont}){
    const Btn=buttonsCont;
    return (
        <>
            <Btn>{buttons}</Btn>
            {children}
        </>
    )
}
type Props = {
    children: JSX.Element
}

const PageContainer = ({ children }: Props) => {
    return <div className="pageContainer">
        {children}
    </div>
}

export default PageContainer
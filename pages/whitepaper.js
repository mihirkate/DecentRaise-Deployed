import WhitePaper from "../components/WhitePaper";

const WhitePaperPage = () => {
    const title = "The Sky Protocol: Sky's Multi-Collateral Dai (MCD) System";

    const content = [
        {
            id: "overview",
            title: "Introduction",
            text: "Beginning in 2015, the Sky project (formerly known as MakerDAO) operated with developers around the globe working together on the first iterations of code, architecture, and documentation...",
        },
        {
            id: "sky-protocol",
            title: "The Sky Protocol",
            text: "Details about the Sky Protocol and how it evolved over the years...",
        },
    ];

    const sidebarItems = [
        { id: "overview", title: "An Overview of the Sky Protocol and Its Features" },
        { id: "sky-protocol", title: "The Sky Protocol" },
    ];

    return <WhitePaper title={title} content={content} sidebarItems={sidebarItems} />;
};

export default WhitePaperPage;

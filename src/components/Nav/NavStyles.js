

//Everything here has a zIndex of 50, so should be above the header with z of 50

export const dropBtnStyles = {
    btn: {
        color: "white",
        cursor: "pointer",
        paddingBottom: "3.0rem",
        fontSize: "1.25rem",
        listStyleType: "none",
        position: "sticky",
        width: "100%",
        height: "48px",
        top: "-1px",
        zIndex: "100",
    },
    bars: {
        width: "35px",
        height: "5px",
        backgroundColor: "white",
        margin: "6px auto",
        pointerEvents: "none",
        caretColor: "transparent",
    },
    barOne: {
        transition: "0.5s",
    },
    barTwo: {
        transition: "0.3s",
    },
    barThree: {
        transition: "0.5s",
    },
    barOneX: {
        transform: "translate(0, 11px) rotate(-45deg)",
    },
    barTwoX: {
        opacity: "0",
    },
    barThreeX: {
        transform: "translate(0, -11px) rotate(45deg)",
    },
    dropContent: {
        transform: "translateY(0.7rem)",
        transform: "scaleY(0)",
        transformOrigin: "top center",
        transitionDuration: "0.5s",
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        zIndex: "100",
        textAlign: "center",
        overflow: "hidden",
    },
    dropContentShow: {
        transform: "scaleY(1)",
        transformOrigin: "top center",
        zIndex: "100",
    },
    dropItem: {
        display: "block",
        color: "white",
        padding: "12px 16px",
        textDecoration: "none",
        borderBottom: "1px solid grey",
        zIndex: "100",
    },
};
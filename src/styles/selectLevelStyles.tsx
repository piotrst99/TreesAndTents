export const levelListStyle = {
    marginTop: "20px",
    display: 'grid',

    '@media (min-width: 576px)' : {
        gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '@media (min-width: 768px)' : {
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    '@media (min-width: 992px)' : {
        gridTemplateColumns: 'repeat(4, 1fr)'
    },
    '@media (min-width: 1200px)' : {
        gridTemplateColumns: 'repeat(5, 1fr)'
    },
    '@media (min-width: 1400px)' : {
        gridTemplateColumns: 'repeat(6, 1fr)'
    },
    '@media (min-width: 1920px)' : {
        gridTemplateColumns: 'repeat(8, 1fr)'
    }
};

export const levelTileStyle = {
    color: '#ffe4c4',
    backgroundColor: '#a9a9a9',
    textAlign: "center",
    fontSize: '20px',
    cursor: "pointer",
    borderRadius: '5px',
    lineHeight: '60px',
    height: '60px',
    margin: '10px',
    border: '1px solid #a9a9a9',
    '&:hover': {
        backgroundColor: '#8b8b8b',
        border: '1px solid #423e3e'
    },
    '@media (min-width: 576px)' : {
        margin: '5px',
    },
};

export const linkToLevelStyle = {
    textDecoration: 'none', 
    color:'#ffe4c4', 
    display: 'block'
};

import { darkGray, darkGreen, darkRed, lightGreen } from "../utils/colors";

export const tileStyle = {
	width: '50px',
	height: '50px',
	borderRadius: '3px',
	margin: '2px'
};

export const tentIconTileStyle = {
	width: '30px',
	height: '30px',
	margin: '10px',
	color: darkRed 
};

export const treeIconTileStyle = {
	width: '30px',
	height: '30px',
	margin: '10px',
	color: darkGreen 
};

export const grassTileStyle = {
	backgroundColor: lightGreen
};

export const grassTileHover = {
	"&:hover": {
    cursor: 'pointer',
    backgroundColor: '#96DB96'
  },
}

export const groundTileStyle = {
	backgroundColor: darkGray 
};

export const groundTileHover = {
	"&:hover": {
		cursor: 'pointer',
		backgroundColor: '#3D3D3D'
	},
}

export const numberTile = {
	width: '50px', 
	height: '50px', 
	fontSize:'25px',
	lineHeight: '50px',
	textAlign: 'center',
	margin: '2px'
};
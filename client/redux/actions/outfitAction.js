import * as actionType from './actionsTypes';

export const addOutfitAction = (outfit) => {
  return {
    type: actionType.addOutfit,
      outfit: outfit,
  }  
}

export const removeOutfitAction = (id) => {
  return {
    type: actionType.removeOutfit,  
     id: id,
    
  }
}
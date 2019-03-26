export const updateFolder = (folder) => {
  return {
    type: "OPEN_FOLDER",
    name: folder,
    active:true
  }
}
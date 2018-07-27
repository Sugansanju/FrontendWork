export default name=>{
  if (true === /^[a-zA-Z ]*$/.test(name)) {
    return true;
  }
  return false;
}

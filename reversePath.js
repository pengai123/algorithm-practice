function getPath(obj) {
  let result = "";
  while (obj.parent) {
    result = obj.parent.name + "/" + result;
    obj = obj.parent;
  }

  result = result + obj.name;
  return result;
}

function getPath(obj) {
  let result = "";
  while (obj) {
    result = obj.name + "/" + result;
    obj = obj.parent;
  }
  return result;
}


function getPath(folder) {
  if (folder.parent) {
    return getPath(folder.parent) + "/" + folder.name
  }
  return folder.name
}

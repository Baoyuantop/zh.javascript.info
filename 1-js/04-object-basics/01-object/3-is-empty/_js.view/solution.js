function isEmpty(obj) {
  for (let key in obj) {
<<<<<<< HEAD
    // 如果进到循环里面，说明有属性。
=======
    // if the loop has started, there is a property
>>>>>>> d10b50ae7f67d91606a751926cb06aa06f10c1b4
    return false;
  }
  return true;
}

var package = document.querySelector("#packages select");
if (package != undefined && package != null){
  packageOnSelect(package.value);
  package.addEventListener("change", function() {
    packageOnSelect(package.value)
  })

  function packageOnSelect(selected_package){
    var content = document.querySelector("#" + selected_package);
    var packages = document.querySelectorAll(".package-content");
    for (var i =0; i < packages.length; i++){
      packages[i].style.display = "none";
    }
    content.style.display = "block";
  }
}

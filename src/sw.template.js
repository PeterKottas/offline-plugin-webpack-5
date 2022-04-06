const constFunction = () => {
  console.log("constFunction");
};
self.addEventListener("push", constFunction);
self.addEventListener("notificationclick", () => {
  console.log("inlineFunction");
});
self.addEventListener("message", function () {
  console.log("function");
});

import foo from "./foo";
// const foo = () => import("./foo")
//   .then(m => m.default);

const button = document.createElement("button");
button.innerText = "BUTTON";

document.body.appendChild(button);

button.addEventListener("click", e => {
  import(
    "date-fns"
  ).then(m => {
    const today = new Date();
    const tomorrow = m.addDays(today, 1)
    console.log(tomorrow);
  });
});

const select = document.createElement('div');

select.innerHTML = `<select>
  <option value=""></option>
  <option value="a">A Theme</option>
  <option value="b">B Theme</option>
</select>`;

document.body.appendChild(select);

const getTheme = (themeName) => import(`./themes/${themeName}.js`); 

select.firstElementChild.addEventListener('change', e => {
  const value = e.target.value;
  getTheme(value).then(themeModule => {
    themeModule.default();
  })
});

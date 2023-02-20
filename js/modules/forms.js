import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
  const form = document.querySelectorAll("form");
  const input = document.querySelectorAll("input");
  const nameInput = document.querySelectorAll('input[name="user_name"]');

  nameInput.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\d/, "");
    });
  });

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "...Loading",
    success: "Thank you for contact",
    fail: "Somthing going wrong",
  };

  const cleanInput = () => {
    input.forEach((item) => {
      item.value = "";
    });
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      let formData = new FormData(item);

      if (item.getAttribute("data-end") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusMessage.textContent = message.fail;
        })
        .finally(() => {
          cleanInput();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });
};

export default forms;

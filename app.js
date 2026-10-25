const loading = document.getElementById("loading");
const userList = document.getElementById("user-list");

async function fetchUser() {
    try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const users = await response.json();
        
        loading.style.display = "none";
        
        users.data.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("user-card");
            
            card.innerHTML = `
                <img src="${user.avatar}" class="avatar" alt="${user.first_name}">
                <h3>${user.first_name} ${user.last_name}</h3>
                <p>ایمیل: ${user.email}</p>
            `;

            // ساخت دکمه حذف
            const deletBtn = document.createElement("button"); // حرف u اصلاح شد
            deletBtn.textContent = "حذف";
            deletBtn.classList.add("delete-btn"); // برای استایل دادن در CSS

            // اضافه کردن به کارت
            userList.appendChild(card);
            card.appendChild(deletBtn);

            // رویداد کلیک (اصلاح ساختار)
            deletBtn.addEventListener("click", () => {
                card.remove();
            });
        });
    } catch (error) {
        loading.textContent = "خطا در دریافت اطلاعات!";
        console.error(error);
    }
}

fetchUser();
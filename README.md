#  API Users List | لیست کاربران آنلاین

A dynamic web application that fetches user data from an external API and displays it beautifully using CSS Grid. Users can view profiles (avatars, names, emails) and remove cards from the UI.

یک اپلیکیشن وب داینامیک که داده‌های کاربران را از یک API خارجی دریافت کرده و با استفاده از CSS Grid به زیبایی نمایش می‌دهد. کاربران می‌توانند پروفایل‌ها (عکس، نام، ایمیل) را مشاهده کرده و کارت‌ها را از صفحه حذف کنند.

---

##  Features | ویژگی‌ها

- **Fetch Data:** Retrieves user data from the `reqres.in` API asynchronously.
- **Loading State:** Displays a loading message while fetching data.
- **Error Handling:** Gracefully handles network errors using `try...catch`.
- **Dynamic UI:** Uses JavaScript to create DOM elements dynamically.
- **Responsive Grid:** Cards adapt to different screen sizes using CSS Grid.
- **Delete Functionality:** Each card has a delete button to remove it from the DOM.

- **دریافت داده‌ها:** دریافت ناهمگام (Asynchronous) داده‌های کاربران از API سایت `reqres.in`.
- **حالت لودینگ:** نمایش پیام "در حال دریافت" تا زمان آماده شدن داده‌ها.
- **مدیریت خطا:** مدیریت خطاهای شبکه با استفاده از `try...catch`.
- **رابط کاربری داینامیک:** ساخت المان‌های HTML به صورت پویا با جاوااسکریپت.
- **گرید ریسپانسیو:** چیدمان کارت‌ها با CSS Grid که با اندازه صفحه نمایش تنظیم می‌شود.
- **قابلیت حذف:** هر کارت یک دکمه حذف دارد تا آن را از صفحه (DOM) پاک کند.

---

##  Technologies Used | تکنولوژی‌های استفاده شده

- **HTML5**
- **CSS3** (CSS Grid, Flexbox, Transitions)
- **JavaScript (ES6+)**
  - `fetch` API & `async/await`
  - Promise handling (`try...catch`)
  - DOM Manipulation (`createElement`, `appendChild`, `innerHTML`)
  - Template Literals (Backticks)
  - Array Methods (`forEach`)
  - Event Listeners

---

##  How to Run | نحوه اجرا

You can run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/samira3afari/fetch-project.git
2. Open index.html in your browser.

3. To see the delete functionality, click on the red "حذف" (Delete) button on any card.
   

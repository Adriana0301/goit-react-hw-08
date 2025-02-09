Рефакторинг коду застосунку «Книга контактів».
Додано взаємодію з бекендом для зберігання контактів.
Використано функцію createAsyncThunk для оголошення операцій.
Для виконання HTTP-запитів використано бібліотеку axios.
Оголошені наступні операції:
fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".
Для коректного опрацювання помилки HTTP-запиту в середині операцій, використано конструкцію try...catch, та у блоці catch повернено результат виклику методу thunkAPI.rejectWithValue.
Обробку усіх трьох екшенів (fulfilled, rejected, pending) та зміну даних у стані Redux зроблено у властивості extraReducers слайсу контактів.

Мемоізація селекторів
Після додавання властивостей loading та error у слайс контактів, виникне проблема оптимізаціі фільтрування контактів, так як вираз фільтрування буде виконуватись не тільки при зміні контактів або фільтру, а також при зміні loading та error.
Для вирішення цієї задачі:
У файлі слайсу контактів contactsSlice.js створено та експортовано мемоізований селектор selectFilteredContacts за допомогою функції createSelector.
Селектор повинен залежати від поточних масиву контактів і значення фільтра, та повернено відфільтрований масив контактів.
Селектор selectFilteredContacts імпортується у компонент списка контактів ContactList.jsx та використовується у useSelector.

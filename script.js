// --- Data Variables ---
// `products` will store product information. Initially, it might be empty or load from localStorage.
let products = [];
// `currentTransactionItems` stores items in the current cart.
let currentTransactionItems = [];
// `transactionHistory` stores all completed transactions for financial reporting.
let transactionHistory = [];
// `expenses` stores all recorded expenses.
let expenses = [];
// `users` stores all registered users for login and management.
let users = []; // New: Array to store users
// `loggedInUser` stores the currently logged-in user object.
let loggedInUser = null; // New: Stores the currently logged-in user
// `currentTransactionMode` tracks if we are in 'registered' or 'custom' product input mode.
let currentTransactionMode = 'registered';

// New variables for daily revenue tracking
let dailyRevenue = 0;
let lastRecordedDate = ''; // Format:YYYY-MM-DD
let isRevenueVisible = true; // New: State for revenue visibility
let isDarkMode = false; // New: State for dark mode

// New variables for monthly financial tracking
let monthlyNetProfit = 0;
let monthlyExpenses = 0;
let lastRecordedMonth = ''; // Format:YYYY-MM

// Bluetooth Printer variables
let bluetoothPrinterDevice = null; // Stores the connected BluetoothDevice object
let printerCharacteristic = null; // Stores the BluetoothGATTCharacteristic for writing data

// QR Scanner variables
let html5QrCodeScanner = null; // Html5QrcodeScanner instance

// --- DOM Elements (Declared here, assigned on DOMContentLoaded) ---
// Main App Containers
let loginScreen;
let mainAppContainer;

// Login Screen Elements
let loginScreenUsernameInput;
let loginScreenPasswordInput;
let loginScreenBtn;
let loginScreenMessage;

let itemList;
let totalAmountInput;
let discountAmountInput;
let paymentAmountInput;
let paymentMethodSelect; // NEW: Payment method dropdown
let changeAmountHeader; // New span in header for change amount
let statusElement;
let newTransactionButton;
let printReceiptButton;
let processOnlyPaymentButton;
let noItemsMessage;
let headerDateTime;
let headerDailyRevenue; // The span that displays the actual number
let headerDailyRevenueAmountContainer; // The container for the revenue amount and its "Rp" prefix
let toggleDailyRevenueVisibilityButton; // New: Button to toggle visibility
let eyeIcon; // New: Eye icon for visible state
let eyeSlashIcon; // New: Eye slash icon for hidden state
let cashierDisplay;
let cashierRole;
let logoutButton; // New: Logout button in header
let darkModeToggle; // New: Dark mode toggle button

// Monthly Financial Bar elements
let monthlyFinancialBarContainer;
let monthlyProfitBar;
let monthlyExpenseBar;


// Registered product input elements
let productCodeInput;
let productNameInput;
let priceInput;
let quantityInput;
let addRegisteredItemButton;
let searchProductByCodeBtn; // NEW: Search product by code button
let productCodeDatalist; // NEW: Datalist element for product code suggestions

// Custom product input elements
let customProductCodeInput;
let customProductNameInput;
let customProductPriceInput;
let customProductQtyInput;
let addCustomItemButton;

// NEW: Online Shop input elements
let onlineShopSection; // Section container for online shop inputs
let showOnlineShopProductsButton; // Button to show online shop section
let marketplaceNameSelect; // Dropdown for marketplace name
let otherMarketplaceNameContainer; // Container for 'Lainnya' input
let otherMarketplaceNameInput; // Input for 'Lainnya' marketplace name
let resiNumberInput; // Input for Nomor Resi
let onlineShopPriceInput; // Input for Harga Jual
let onlineShopQuantityInput; // Input for Jumlah
let addToCartBtnOnlineShop; // Button to add to cart for online shop

let showRegisteredProductsButton;
let showCustomProductsButton;
let showScannerProductsButton; // NEW: Scanner button
let customProductSection;
let registeredProductSection;
let scannerSection; // NEW: Scanner section
let reader; // NEW: Element for QR scanner camera feed
let scannerResult; // NEW: Element to display scanner result
let startScannerBtn; // NEW: Start scanner button
let stopScannerBtn = null; // NEW: Stop scanner button

// Admin menu elements
let adminMenuButton;
let adminMenuDropdown;
let openStoreProductsModalBtn;
let openAddProductModalBtn;
let openFinancialReportModalBtn;
let openExpensesModalBtn;
let openUserSettingsModalBtn; // New: Open User Settings Modal Button
let openPriceCalculatorModalBtn; // NEW: Open Price Calculator Modal Button
let exportProductsBtn;
let importProductsFileInput;
let importProductsBtn;
let exportDataBtn;
let importFileInput;
let importDataBtn;
let resetAllDataBtn;

// Store Products Modal elements
let storeProductsModal;
let closeStoreProductsModalBtn;
let storeProductsTableBody;
let searchStoreProductsInput;
let storeProductsTableContainer;
let editProductForm;
let editProductIdInput;
let editProductNameInput;
let editProductCostInput;
let editProductPriceInput;
let editProductStockInput;
let saveProductEditBtn;
let cancelProductEditBtn;

// Add Product Modal elements
let addProductModal;
let closeAddProductModalBtn;
let addProductCodeInput;
let addProductNameInput;
let addProductCostInput;
let addProductPriceInput;
let addProductProfitInput;
let addProductStockInput;
let saveNewProductBtn;
let cancelAddProductBtn;

// Expenses Modal elements
let expensesModal;
let closeExpensesModalBtn;
let expenseDateInput;
let expenseDescriptionInput;
let expenseAmountInput;
let addExpenseBtn;
let expensesListBody;
let emptyExpensesMessage;
let expenseStatusMessage;
let expenseSearchInput;
let expenseFilterStartDate;
let expenseFilterEndDate;
let applyExpenseFilterBtn;
let clearExpenseFilterBtn;
let exportExpensesXLSBtn; // NEW: Get the export button
let totalExpensesDisplayModal;


// Financial Report Modal elements
let financialReportModal;
let closeFinancialReportModalBtn;
let reportStartDateInput;
let reportEndDateInput;
let applyFinancialFilterBtn;
let clearFinancialFilterBtn;
let exportFinancialReportXLSBtn;
let totalRevenueDisplay;
let totalExpensesDisplay;
let grossProfitDisplay;
let netProfitDisplay;
let financialChartCanvas;
let financialReportMessageBox;

// Transaction History Modal elements
let openTransactionHistoryBtn;
let transactionHistoryModal;
let closeTransactionHistoryModalBtn;
let transactionHistoryTableBody;
let historyStartDateInput;
let historyEndDateInput;
let applyHistoryFilterBtn;
let clearHistoryFilterBtn;
let transactionHistoryMessageBox;
let transactionDetailSection;
let detailTransactionId;
let detailTransactionDate;
let detailCashier;
let detailSubtotal;
let detailDiscount;
let detailTotalAmount;
let detailPaymentAmount;
let detailChangeAmount;
let detailItemList;
let closeTransactionDetailBtn;
let reprintReceiptBtn; // New: Reprint receipt button in detail section
let historyFilterControls;
let totalTransactionsAmount;

// Confirmation Modal elements
let confirmationModal;
let confirmationMessage;
let confirmOkBtn;
let confirmCancelBtn;

// User Settings Modal (New)
let userSettingsModal;
let closeUserSettingsModalBtn;
let userSettingsLoginSection;
let userSettingsLoginUsernameInput;
let userSettingsLoginPasswordInput;
let userSettingsLoginButton;
let userSettingsLoginStatusMessage;
let userManagementSection;
let newUserNameInput;
let newUserPasswordInput;
let newUserRoleSelect;
let addUserButton;
let addUserStatusMessage;
let userListBody;
let emptyUserMessage;

// Printer Settings Modal (New)
let openPrinterSettingsBtn;
let printerSettingsModal;
let closePrinterSettingsModalBtn;
let printerStatus;
let connectPrinterBtn;
let disconnectPrinterBtn;
let testPrintBtn;

// Price Calculator Modal (NEW)
let priceCalculatorModal;
let closePriceCalculatorModalBtn;
let priceCalcProductCodeInput;
let copyProductCodeBtn;
let priceCalcProductNameInput;
let priceCalcModalInput;
let priceCalcMarginPercentInput;
let priceCalcTaxPercentInput;
let priceCalcDiscountPercentInput;
let calculatePriceBtn;
let priceCalcSellingPriceInput;
let copySellingPriceBtn;
let priceCalcProfitInput;
let priceCalcStatusMessage;

// Nominal Quick Pay Buttons (NEW)
let nominalButtonsContainer;
let nominalButtons;

// New: Audio elements for sounds
let scanSuccessSound; // Audio for successful scan
let transactionSuccessSound; // Audio for successful transaction


// New: Reset data modal elements
let resetDataModal;
let resetPasswordInput;
let resetDataConfirmBtn;
let resetDataCancelBtn;
let resetDataMessage;

// NEW: Daily Report Print Modal Elements
let openDailyReportPrintModalBtn;
let dailyReportPrintModal;
let closeDailyReportPrintModalBtn;
let reportPrintDateInput;
let dailyReportPrintStatusMessage;
let printDailyReportBtn;


// --- Data Storage Keys ---
const LOCAL_STORAGE_PRODUCTS_KEY = 'pos_products';
const LOCAL_STORAGE_TRANSACTIONS_KEY = 'pos_transactions';
const LOCAL_STORAGE_EXPENSES_KEY = 'pos_expenses';
const LOCAL_STORAGE_USERS_KEY = 'pos_users'; // New: Key for users
// Changed from LOCAL_STORAGE to SESSION_STORAGE for automatic logout on browser close
const SESSION_STORAGE_LOGGED_IN_USER_KEY = 'pos_logged_in_user_session'; // New: Key for logged-in user in session storage
const LOCAL_STORAGE_DAILY_REVENUE_KEY = 'pos_daily_revenue';
const LOCAL_STORAGE_LAST_DATE_KEY = 'pos_last_recorded_date';
const LOCAL_STORAGE_REVENUE_VISIBILITY_KEY = 'pos_revenue_visibility';
const LOCAL_STORAGE_DARK_MODE_KEY = 'pos_dark_mode'; // New: Key for dark mode
const LOCAL_STORAGE_MONTHLY_NET_PROFIT_KEY = 'pos_monthly_net_profit'; // New key
const LOCAL_STORAGE_MONTHLY_EXPENSES_KEY = 'pos_monthly_expenses'; // New key
const LOCAL_STORAGE_LAST_MONTH_KEY = 'pos_last_recorded_month'; // New key
const LOCAL_STORAGE_PRINTER_ID_KEY = 'pos_bluetooth_printer_id'; // New: Key to store last connected printer ID

// --- Hardcoded password for reset (as per user request) ---
const RESET_PASSWORD = "alfajrihanif24@gmail.com";


// --- Functions for Local Storage ---
// Loads products from localStorage.
function loadProducts() {
    try {
        const storedProducts = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
        products = storedProducts ? JSON.parse(storedProducts) : [
             // Default products if none in storage
            { id: 'prod001', name: "Kopi Hitam", price: 15000, cost: 10000, stock: 100 },
            { id: 'prod002', name: "Kopi Susu", price: 18000, cost: 12000, stock: 80 },
            { id: 'prod003', name: "Teh Manis", price: 10000, cost: 6000, stock: 150 },
            { id: 'prod004', name: "Es Jeruk", price: 12000, cost: 7000, stock: 90 },
            { id: 'prod005', name: "Roti Bakar Keju", price: 25000, cost: 18000, stock: 50 },
            { id: 'prod006', name: "Mie Ayam", price: 22000, cost: 15000, stock: 70 },
            { id: 'prod007', name: "Nasi Goreng", price: 28000, cost: 20000, stock: 60 },
            { id: 'prod008', name: "Air Mineral", price: 5000, cost: 2000, stock: 200 },
            { id: 'AR-KEMEJA-POLOS', name: "Kemeja Polos", price: 120000, cost: 80000, stock: 50 }, // Added for testing
        ];
        console.log("Produk dimuat:", products); // Log for debugging
    } catch (e) {
        console.error("Gagal memuat produk dari localStorage:", e);
        products = [
            // Fallback to default if there's an error
            { id: 'prod001', name: "Kopi Hitam", price: 15000, cost: 10000, stock: 100 },
            { id: 'prod002', name: "Kopi Susu", price: 18000, cost: 12000, stock: 80 },
            { id: 'prod003', name: "Teh Manis", price: 10000, cost: 6000, stock: 150 },
            { id: 'prod004', name: "Es Jeruk", price: 12000, cost: 7000, stock: 90 },
            { id: 'prod005', name: "Roti Bakar Keju", price: 25000, cost: 18000, stock: 50 },
            { id: 'prod006', name: "Mie Ayam", price: 22000, cost: 15000, stock: 70 },
            { id: 'prod007', name: "Nasi Goreng", price: 28000, cost: 20000, stock: 60 },
            { id: 'prod008', name: "Air Mineral", price: 5000, cost: 2000, stock: 200 },
            { id: 'AR-KEMEJA-POLOS', name: "Kemeja Polos", price: 120000, cost: 80000, stock: 50 }, // Added for testing
        ];
    }
    renderProductDatalist(); // NEW: Render datalist after products are loaded
}

// Saves products to localStorage.
function saveProducts() {
    try {
        console.log("Menyimpan produk:", products); // Log for debugging
        localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
    } catch (e) {
        console.error("Gagal menyimpan produk ke localStorage:", e);
        displayStatus("Error: Gagal menyimpan produk. Periksa penyimpanan browser Anda.", "error");
    }
    renderProductDatalist(); // NEW: Re-render datalist after products are saved
}

// Loads transaction history from localStorage.
function loadTransactionHistory() {
    try {
        const storedTransactions = localStorage.getItem(LOCAL_STORAGE_TRANSACTIONS_KEY);
        transactionHistory = storedTransactions ? JSON.parse(storedTransactions) : [];
    } catch (e) {
        console.error("Gagal memuat riwayat transaksi dari localStorage:", e);
        transactionHistory = []; // Fallback to empty array
    }
}

// Saves transaction history to localStorage.
function saveTransactionHistory() {
    try {
        localStorage.setItem(LOCAL_STORAGE_TRANSACTIONS_KEY, JSON.stringify(transactionHistory));
    } catch (e) {
        console.error("Gagal menyimpan riwayat transaksi ke localStorage:", e);
        displayStatus("Error: Gagal menyimpan riwayat transaksi. Periksa penyimpanan browser Anda.", "error");
    }
}

// Loads expenses from localStorage.
function loadExpenses() {
    try {
        const storedExpenses = localStorage.getItem(LOCAL_STORAGE_EXPENSES_KEY);
        expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    } catch (e) {
        console.error("Gagal memuat pengeluaran dari localStorage:", e);
        expenses = []; // Fallback to empty array
    }
}

// Saves expenses to localStorage.
function saveExpenses() {
    try {
        localStorage.setItem(LOCAL_STORAGE_EXPENSES_KEY, JSON.stringify(expenses));
    } catch (e) {
        console.error("Gagal menyimpan pengeluaran ke localStorage:", e);
        displayStatus("Error: Gagal menyimpan pengeluaran. Periksa penyimpanan browser Anda.", "error");
    }
}

// New: Loads users from localStorage and loggedInUser from sessionStorage.
function loadUsers() {
    try {
        const storedUsers = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
        users = storedUsers ? JSON.parse(storedUsers) : [
            // Default admin user if no users exist
            { username: 'admin', password: 'admin', role: 'admin' }
        ];
        // Load loggedInUser from sessionStorage
        const storedLoggedInUser = sessionStorage.getItem(SESSION_STORAGE_LOGGED_IN_USER_KEY);
        loggedInUser = storedLoggedInUser ? JSON.parse(storedLoggedInUser) : null;
    } catch (e) {
        console.error("Gagal memuat pengguna dari localStorage/sessionStorage:", e);
        users = [{ username: 'admin', password: 'admin', role: 'admin' }]; // Fallback to default admin
        loggedInUser = null;
    }
}

// New: Saves users to localStorage and loggedInUser to sessionStorage.
function saveUsers() {
    try {
        localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
        // Save loggedInUser to sessionStorage
        sessionStorage.setItem(SESSION_STORAGE_LOGGED_IN_USER_KEY, JSON.stringify(loggedInUser));
    } catch (e) {
        console.error("Gagal menyimpan pengguna ke localStorage/sessionStorage:", e);
        displayStatus("Error: Gagal menyimpan pengguna. Periksa penyimpanan browser Anda.", "error");
    }
}

// Loads daily revenue from localStorage.
function loadDailyRevenue() {
    try {
        const storedRevenue = localStorage.getItem(LOCAL_STORAGE_DAILY_REVENUE_KEY);
        const storedDate = localStorage.getItem(LOCAL_STORAGE_LAST_DATE_KEY);
        dailyRevenue = storedRevenue ? parseFloat(storedRevenue) : 0;
        lastRecordedDate = storedDate || '';
        console.log(`Loaded daily revenue: ${dailyRevenue}, last date: ${lastRecordedDate}`);
    } catch (e) {
        console.error("Gagal memuat pendapatan harian dari localStorage:", e);
        dailyRevenue = 0;
        lastRecordedDate = '';
    }
}

// Saves daily revenue to localStorage.
function saveDailyRevenue() {
    try {
        localStorage.setItem(LOCAL_STORAGE_DAILY_REVENUE_KEY, dailyRevenue.toString());
        localStorage.setItem(LOCAL_STORAGE_LAST_DATE_KEY, lastRecordedDate);
        console.log(`Saved daily revenue: ${dailyRevenue}, last date: ${lastRecordedDate}`);
    }
    catch (e) {
        console.error("Gagal menyimpan pendapatan harian ke localStorage:", e);
    }
}

// Loads revenue visibility state from localStorage
function loadRevenueVisibility() {
    try {
        const storedVisibility = localStorage.getItem(LOCAL_STORAGE_REVENUE_VISIBILITY_KEY);
        // Default to true (visible) if not found or explicitly false
        isRevenueVisible = storedVisibility !== null ? JSON.parse(storedVisibility) : true;
    } catch (e) {
        console.error("Gagal memuat status visibilitas pendapatan dari localStorage:", e);
        isRevenueVisible = true; // Default to visible on error
    }
}

// Saves revenue visibility state to localStorage
function saveRevenueVisibility() {
    try {
        localStorage.setItem(LOCAL_STORAGE_REVENUE_VISIBILITY_KEY, JSON.stringify(isRevenueVisible));
    } catch (e) {
        console.error("Gagal menyimpan status visibilitas pendapatan ke localStorage:", e);
    }
}

// New: Loads dark mode state from localStorage
function loadDarkModeState() {
    try {
        const storedDarkMode = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);
        isDarkMode = storedDarkMode !== null ? JSON.parse(storedDarkMode) : false; // Default to light mode
    } catch (e) {
        console.error("Gagal memuat status mode gelap dari localStorage:", e);
        isDarkMode = false; // Default to light mode on error
    }
}

// New: Saves dark mode state to localStorage
function saveDarkModeState() {
    try {
        localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, JSON.stringify(isDarkMode));
    } catch (e) {
        console.error("Gagal menyimpan status mode gelap ke localStorage:", e);
    }
}

// New: Loads monthly financial data from localStorage
function loadMonthlyFinancialData() {
    try {
        const storedProfit = localStorage.getItem(LOCAL_STORAGE_MONTHLY_NET_PROFIT_KEY);
        const storedExpenses = localStorage.getItem(LOCAL_STORAGE_MONTHLY_EXPENSES_KEY);
        const storedMonth = localStorage.getItem(LOCAL_STORAGE_LAST_MONTH_KEY);

        monthlyNetProfit = storedProfit ? parseFloat(storedProfit) : 0;
        monthlyExpenses = storedExpenses ? parseFloat(storedExpenses) : 0;
        lastRecordedMonth = storedMonth || '';
    } catch (e) {
        console.error("Gagal memuat data keuangan bulanan dari localStorage:", e);
        monthlyNetProfit = 0;
        monthlyExpenses = 0;
        lastRecordedMonth = '';
    }
}

// New: Saves monthly financial data to localStorage
function saveMonthlyFinancialData() {
    try {
        localStorage.setItem(LOCAL_STORAGE_MONTHLY_NET_PROFIT_KEY, monthlyNetProfit.toString());
        localStorage.setItem(LOCAL_STORAGE_MONTHLY_EXPENSES_KEY, monthlyExpenses.toString());
        localStorage.setItem(LOCAL_STORAGE_LAST_MONTH_KEY, lastRecordedMonth);
    } catch (e) {
        console.error("Gagal menyimpan data keuangan bulanan ke localStorage:", e);
    }
}

// New: Applies dark mode classes to the body
function applyDarkMode() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// --- General Utility Functions ---
// Displays a status message to the user.
function displayStatus(message, type, element = statusElement) { // Added optional element parameter
    if (!element) return;
    element.textContent = message;
    // Using Tailwind classes dynamically based on theme for status messages
    let bgColorClass, textColorClass;
    if (isDarkMode) {
        bgColorClass = type === 'success' ? 'bg-green-700' :
                       type === 'error' ? 'bg-red-700' :
                       'bg-blue-700'; // Default for info/loading
        textColorClass = type === 'success' ? 'text-green-200' :
                         type === 'error' ? 'text-red-200' :
                         'text-blue-200'; // Default for info/loading
    } else {
        bgColorClass = type === 'success' ? 'bg-green-100' :
                       type === 'error' ? 'bg-red-100' :
                       'bg-blue-100'; // Default for info/loading
        textColorClass = type === 'success' ? 'text-green-800' :
                         type === 'error' ? 'text-red-700' :
                         'text-blue-800'; // Default for info/loading
    }
    element.className = `mt-4 p-3 text-center rounded-md text-sm ${bgColorClass} ${textColorClass}`;
    element.classList.remove('hidden'); // Ensure message box is visible
}

// Updates the daily revenue display in the header based on visibility.
function updateHeaderDailyRevenue() {
    if (headerDailyRevenue) {
        headerDailyRevenue.textContent = dailyRevenue.toLocaleString('id-ID');
    }
    // Update visibility of the container and toggle icons
    if (headerDailyRevenueAmountContainer) {
        headerDailyRevenueAmountContainer.style.visibility = isRevenueVisible ? 'visible' : 'hidden';
    }
    if (eyeIcon && eyeSlashIcon) {
        eyeIcon.classList.toggle('hidden', !isRevenueVisible);
        eyeSlashIcon.classList.toggle('hidden', isRevenueVisible);
    }
}

// Checks if the date has changed and resets daily revenue if so.
// Also checks if the month has changed and resets monthly financial data.
function checkAndResetDailyRevenue() {
    const today = new Date().toISOString().slice(0, 10); //YYYY-MM-DD
    const thisMonth = new Date().toISOString().slice(0, 7); //YYYY-MM

    if (lastRecordedDate !== today) {
        console.log(`Date changed from ${lastRecordedDate} to ${today}. Resetting daily revenue.`);
        dailyRevenue = 0;
        lastRecordedDate = today;
        saveDailyRevenue(); // Save the reset revenue and new date
        displayStatus("Pendapatan harian direset untuk hari baru.", "info");
    }
    updateHeaderDailyRevenue(); // Always update header with current daily revenue

    if (lastRecordedMonth !== thisMonth) {
        console.log(`Month changed from ${lastRecordedMonth} to ${thisMonth}. Resetting monthly financial data.`);
        monthlyNetProfit = 0;
        monthlyExpenses = 0;
        lastRecordedMonth = thisMonth;
        saveMonthlyFinancialData(); // Save the reset monthly data and new month
    }
    renderMonthlyFinancialBar(); // Always update the monthly bar
}

// New: Renders the monthly financial profit/expense bar in the header.
function renderMonthlyFinancialBar() {
    if (!monthlyProfitBar || !monthlyExpenseBar || !monthlyFinancialBarContainer) return;

    const total = monthlyNetProfit + monthlyExpenses; // Use the sum of profit and expenses as the base
    let profitWidth = 0;
    let expenseWidth = 0;

    if (total > 0) {
        // If profit is higher, scale profit to 100% and expenses relative to profit
        if (monthlyNetProfit >= monthlyExpenses) {
            profitWidth = 100;
            expenseWidth = (monthlyExpenses / monthlyNetProfit) * 100;
        } else { // If expenses are higher, scale expenses to 100% and profit relative to expenses
            expenseWidth = 100;
            profitWidth = (monthlyNetProfit / monthlyExpenses) * 100;
        }
    }

    // Adjust to ensure they always add up to 100% of the bar, proportionally
    // If both are 0, both widths should be 0.
    if (monthlyNetProfit === 0 && monthlyExpenses === 0) {
        profitWidth = 0;
        expenseWidth = 0;
    } else if (monthlyNetProfit > 0 && monthlyExpenses === 0) {
        profitWidth = 100;
        expenseWidth = 0;
    } else if (monthlyNetProfit === 0 && monthlyExpenses > 0) {
        profitWidth = 0;
        expenseWidth = 100;
    } else {
        const combinedTotal = monthlyNetProfit + monthlyExpenses;
        profitWidth = (monthlyNetProfit / combinedTotal) * 100;
        expenseWidth = (monthlyExpenses / combinedTotal) * 100;
    }


    monthlyProfitBar.style.width = `${profitWidth}%`;
    monthlyExpenseBar.style.width = `${expenseWidth}%`;

    // Apply rounded corners based on which side is present
    monthlyProfitBar.classList.remove('rounded-l-full', 'rounded-r-full');
    monthlyExpenseBar.classList.remove('rounded-l-full', 'rounded-r-full');

    if (profitWidth > 0 && expenseWidth > 0) {
        monthlyProfitBar.classList.add('rounded-l-full');
        monthlyExpenseBar.classList.add('rounded-r-full');
    } else if (profitWidth > 0) {
        monthlyProfitBar.classList.add('rounded-full');
    } else if (expenseWidth > 0) {
        monthlyExpenseBar.classList.add('rounded-full');
    }

    // Set the container background if both are zero
    if (profitWidth === 0 && expenseWidth === 0) {
        monthlyFinancialBarContainer.style.backgroundColor = '#ccc'; // Default gray
    } else {
        monthlyFinancialBarContainer.style.backgroundColor = 'transparent'; // Transparent if bars are visible
    }
}

// Function to copy text to clipboard
function copyTextToClipboard(text, successMessageElement) {
    if (!navigator.clipboard) {
        // Fallback for older browsers or if clipboard API is not available (e.g., in some iframes)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Avoid scrolling to bottom
        textArea.style.opacity = "0";       // Hide
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            displayStatus("Berhasil disalin!", "success", successMessageElement);
        } catch (err) {
            console.error('Gagal menyalin: ', err);
            displayStatus("Gagal menyalin teks.", "error", successMessageElement);
        }
        document.body.removeChild(textArea);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        displayStatus("Berhasil disalin!", "success", successMessageElement);
    }).catch(function(err) {
        console.error('Gagal menyalin: ', err);
        displayStatus("Gagal menyalin teks.", "error", successMessageElement);
    });
}

// NEW: Function to play scan success sound
function playScanSuccessSound() {
    if (scanSuccessSound) {
        scanSuccessSound.play().catch(e => console.error("Error playing scan success sound:", e));
    }
}

// New: Function to play transaction success sound
function playTransactionSuccessSound() {
    if (transactionSuccessSound) {
        transactionSuccessSound.play().catch(e => console.error("Error playing transaction success sound:", e));
    }
}


// --- Core Application Logic ---

// Adds a product to the transaction list.
function addProductToTransaction(id, name, price, qty, isCustom = false, isOnlineShop = false, marketplace = '', resi = '') {
    // For custom products, we give them a unique ID. Registered products use their original ID.
    // For online shop products, we also give them a unique ID.
    const finalId = isCustom ? 'custom-' + Date.now() : (isOnlineShop ? 'online-' + Date.now() : id);

    // Check if product already exists in the cart (only for registered products)
    // Custom and Online Shop products are always added as new lines, even if they have the same name/price.
    const existingItemIndex = currentTransactionItems.findIndex(item => item.productId === finalId && !isCustom && !isOnlineShop);

    // Find the product in the global products array to get its cost and current stock
    // For custom/online shop products, productData will be undefined as they don't exist in the 'products' array.
    const productData = products.find(p => p.id === id);

    // Check stock for registered products before adding/updating quantity
    if (!isCustom && !isOnlineShop && productData && productData.stock !== undefined) {
        const currentQtyInCart = existingItemIndex > -1 ? currentTransactionItems[existingItemIndex].qty : 0;
        const newTotalQty = currentQtyInCart + qty;

        if (productData.stock < newTotalQty) {
            displayStatus(`Error: Stok ${productData.name} habis. Stok tersedia: ${productData.stock}`, "error");
            return;
        }
    }

    if (existingItemIndex > -1) {
        // If it's a registered product and already in the list, just update quantity
        currentTransactionItems[existingItemIndex].qty += qty;
    } else {
        // Add new product to list
        currentTransactionItems.push({
            productId: finalId,
            name: name,
            qty: qty,
            price: price,
            // Store cost for financial report
            // For registered products: use actual cost
            // For custom products: calculate cost as 80% of price (20% margin)
            // For online shop products: calculate cost as 75% of price (25% margin)
            cost: isCustom ? (price * 0.8) : (isOnlineShop ? (price * 0.75) : (productData?.cost || 0)),
            isCustom: isCustom, // Add a flag to identify custom products
            isOnlineShop: isOnlineShop, // Add a flag to identify online shop products
            marketplace: marketplace, // Store marketplace name
            resi: resi // Store resi number
        });
    }
    renderTransactionItems();
    // Clear product code input after adding to cart
    productCodeInput.value = '';
    productNameInput.value = '';
    priceInput.value = '0';
    quantityInput.value = '1';
    productCodeInput.focus(); // Focus back on product code input for next scan/entry
}

// Renders items in the transaction list and updates totals.
function renderTransactionItems() {
    if (!itemList || !noItemsMessage || !totalAmountInput) return; // Ensure elements exist

    itemList.innerHTML = ''; // Clear existing items
    let subtotal = 0; // Changed from total to subtotal

    if (currentTransactionItems.length === 0) {
        noItemsMessage.classList.remove('hidden'); // Show "No items" message
        itemList.appendChild(noItemsMessage); // Ensure it's in the list
    } else {
        noItemsMessage.classList.add('hidden'); // Hide "No items" message
        currentTransactionItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            // Adjust classes for dark mode dynamically
            const itemBgClass = isDarkMode ? 'bg-gray-700' : 'bg-white';
            const itemBorderClass = isDarkMode ? 'border-gray-600' : 'border-gray-200';
            const itemTextClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
            const itemQtyInputBg = isDarkMode ? 'bg-gray-600' : 'bg-white';
            const itemQtyInputBorder = isDarkMode ? 'border-gray-500' : 'border-gray-300';
            const itemQtyInputText = isDarkMode ? 'text-gray-200' : 'text-gray-900';
            const itemPriceText = isDarkMode ? 'text-gray-300' : 'text-gray-700';
            const itemTotalText = isDarkMode ? 'text-gray-100' : 'text-gray-900';


            itemDiv.className = `flex flex-col sm:flex-row items-center gap-2 mb-3 p-3 rounded-md shadow-sm border ${itemBgClass} ${itemBorderClass}`;
            itemDiv.innerHTML = `
                <span class="flex-1 font-medium ${itemTextClass}">${item.name} ${item.isOnlineShop ? `(${item.marketplace} - ${item.resi})` : ''}</span>
                <input type="number" value="${item.qty}" data-item-index="${index}" class="item-qty-input px-2 py-1 border rounded-md text-center focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm ${itemQtyInputBg} ${itemQtyInputBorder} ${itemQtyInputText}">
                <span class="font-semibold w-24 text-right ${itemPriceText}">Rp ${item.price.toLocaleString('id-ID')}</span>
                <span class="font-bold w-28 text-right ${itemTotalText}">Rp ${(item.qty * item.price).toLocaleString('id-ID')}</span>
                <button class="removeItem bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md shadow-sm transition duration-300 ease-in-out text-sm" data-item-index="${index}">Hapus</button>
            `;
            itemList.appendChild(itemDiv);
            subtotal += item.qty * item.price;
        });
    }

    // Apply discount to the total displayed
    const discount = parseFloat(discountAmountInput.value) || 0;
    const finalTotal = subtotal - discount;
    totalAmountInput.value = `Rp ${finalTotal.toLocaleString('id-ID')}`; // Update to show final total after discount
    calculateChange();
    updateHeaderDateTime(); // Update date/time on item render or init
    updateCashierDisplay();
}

// Calculates and displays the change.
function calculateChange() {
    if (!totalAmountInput || !paymentAmountInput || !changeAmountHeader) return; // Ensure elements exist
    const total = parseFloat(totalAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0; // Clean 'Rp' and commas
    const payment = parseFloat(paymentAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0; // Clean 'Rp' and commas
    const change = payment - total;

    // Update the change amount in the header
    changeAmountHeader.textContent = `Rp ${(change > 0 ? change : 0).toLocaleString('id-ID')}`;
}

// Updates the current date and time display in the header.
function updateHeaderDateTime() {
    if (!headerDateTime) return; // Ensure element exists
    const now = new Date();
    const options = {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false // Use 24-hour format
    };
    headerDateTime.textContent = now.toLocaleDateString('id-ID', options);
}

// Updates cashier display in header and controls admin menu visibility.
function updateCashierDisplay() {
    // Check all required elements for null/undefined before proceeding
    if (!cashierDisplay || !cashierRole || !adminMenuButton || !adminMenuDropdown) return;

    if (loggedInUser) {
        cashierDisplay.textContent = loggedInUser.username;
        cashierRole.textContent = loggedInUser.role;
        // Show admin menu only if logged in user is admin
        if (loggedInUser.role === 'admin') {
            adminMenuButton.classList.remove('hidden');
        } else {
            adminMenuButton.classList.add('hidden');
            adminMenuDropdown.classList.add('hidden'); // Ensure dropdown is hidden for non-admins
        }
    } else {
        cashierDisplay.textContent = 'Tidak Login';
        cashierRole.textContent = '';
        adminMenuButton.classList.add('hidden'); // Hide admin menu if not logged in
        adminMenuDropdown.classList.add('hidden'); // Ensure dropdown is hidden
    }
}

// Resets the transaction for a new one.
function startNewTransaction() {
    currentTransactionItems = [];
    // Ensure payment and change inputs are reset BEFORE rendering items
    if (paymentAmountInput) paymentAmountInput.value = '0';
    if (discountAmountInput) discountAmountInput.value = '0'; // Reset discount
    if (changeAmountHeader) changeAmountHeader.textContent = 'Rp 0'; // Explicitly set to 0
    if (paymentMethodSelect) paymentMethodSelect.value = "Tunai"; // Reset payment method

    renderTransactionItems(); // This will now calculate change based on the reset payment input and empty cart.

    if (document.getElementById('transactionNumber')) document.getElementById('transactionNumber').value = 'TRX-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    displayStatus("", ""); // Clear status
    updateHeaderDateTime();
    updateCashierDisplay();
    updateHeaderDailyRevenue(); // Update daily revenue display on new transaction start
    renderMonthlyFinancialBar(); // Update the monthly bar
    // Clear registered product inputs
    if (productCodeInput) productCodeInput.value = '';
    if (productNameInput) productNameInput.value = '';
    if (priceInput) priceInput.value = '0';
    if (quantityInput) quantityInput.value = '1';

    // Clear custom product inputs
    if (customProductCodeInput) customProductCodeInput.value = '';
    if (customProductNameInput) customProductNameInput.value = '';
    if (customProductPriceInput) customProductPriceInput.value = '0';
    if (customProductQtyInput) customProductQtyInput.value = '1';

    // Clear online shop inputs
    if (marketplaceNameSelect) marketplaceNameSelect.value = '';
    if (otherMarketplaceNameInput) otherMarketplaceNameInput.value = '';
    if (otherMarketplaceNameContainer) otherMarketplaceNameContainer.style.display = 'none';
    if (resiNumberInput) resiNumberInput.value = '';
    if (onlineShopPriceInput) onlineShopPriceInput.value = '0';
    if (onlineShopQuantityInput) onlineShopQuantityInput.value = '1';

    // Stop scanner if it's running
    stopQrScanner();

    // Set default view to Registered Products
    showSection('registered');
}

// Function to toggle sections (Registered/Custom/Online Shop/Scanner Products).
function showSection(mode) {
    currentTransactionMode = mode;

    // Hide all sections first
    registeredProductSection.classList.add('hidden');
    customProductSection.classList.add('hidden');
    onlineShopSection.classList.add('hidden'); // NEW: Hide online shop section
    scannerSection.classList.add('hidden');

    // Reset button styles
    showRegisteredProductsButton.classList.remove('bg-green-500', 'hover:bg-green-600', 'bg-gray-400', 'hover:bg-gray-500');
    showCustomProductsButton.classList.remove('bg-green-500', 'hover:bg-green-600', 'bg-gray-400', 'hover:bg-gray-500');
    showOnlineShopProductsButton.classList.remove('bg-purple-500', 'hover:bg-purple-600', 'bg-gray-400', 'hover:bg-gray-500'); // NEW: Online shop button
    showScannerProductsButton.classList.remove('bg-green-500', 'hover:bg-green-600', 'bg-blue-500', 'hover:bg-blue-600');

    // Stop scanner if switching away from scanner section
    if (mode !== 'scanner') {
        stopQrScanner();
    }

    // Show the selected section and apply active button style
    if (mode === 'registered') {
        registeredProductSection.classList.remove('hidden');
        showRegisteredProductsButton.classList.add('bg-green-500', 'hover:bg-green-600');
        showCustomProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showOnlineShopProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500'); // NEW
        showScannerProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        paymentMethodSelect.value = "Tunai"; // Default to Tunai for registered/cashier
        paymentAmountInput.disabled = false; // Enable payment input
    } else if (mode === 'custom') {
        customProductSection.classList.remove('hidden');
        showRegisteredProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showCustomProductsButton.classList.add('bg-green-500', 'hover:bg-green-600');
        showOnlineShopProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500'); // NEW
        showScannerProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        paymentMethodSelect.value = "Tunai"; // Default to Tunai for custom
        paymentAmountInput.disabled = false; // Enable payment input
    } else if (mode === 'online-shop') { // NEW: Online Shop mode
        onlineShopSection.classList.remove('hidden');
        showRegisteredProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showCustomProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showOnlineShopProductsButton.classList.add('bg-purple-500', 'hover:bg-purple-600'); // Active style for online shop
        showScannerProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        paymentMethodSelect.value = "Transfer Bank"; // Force Transfer Bank for online shop
        paymentAmountInput.disabled = true; // Disable payment input for online shop
        calculateChange(); // Recalculate to update payment amount based on total
    } else if (mode === 'scanner') {
        scannerSection.classList.remove('hidden');
        showRegisteredProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showCustomProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500');
        showOnlineShopProductsButton.classList.add('bg-gray-400', 'hover:bg-gray-500'); // NEW
        showScannerProductsButton.classList.add('bg-green-500', 'hover:bg-green-600'); // Use green for active scanner button
        // Automatically start scanner when switching to this section
        startQrScanner();
        paymentMethodSelect.value = "Tunai"; // Default to Tunai for scanner
        paymentAmountInput.disabled = false; // Enable payment input
    }
}

// NEW: Function to prepare transaction object and decrement stock
function createTransactionObjectAndDecrementStock() {
    const total = parseFloat(totalAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0; // Final total after discount
    let payment = parseFloat(paymentAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0; // Use 'let' because it might be modified
    const discount = parseFloat(discountAmountInput.value) || 0; // Get current discount value
    const paymentMethod = paymentMethodSelect.value; // Get selected payment method

    // If payment method is QRIS or Transfer Bank, set payment to total for direct processing
    if (paymentMethod === 'QRIS' || paymentMethod === 'Transfer Bank') {
        payment = total; // Automatically set payment to total for these methods
        paymentAmountInput.value = total.toLocaleString('id-ID'); // Update UI
    }

    if (payment < total) {
        displayStatus("Error: Jumlah pembayaran kurang dari total!", "error");
        return null;
    }

    if (currentTransactionItems.length === 0) {
        displayStatus("Error: Tambahkan setidaknya satu item untuk memproses transaksi!", "error");
        return null;
    }

    // Calculate profit for the current transaction
    let transactionGrossProfit = 0;
    currentTransactionItems.forEach(item => {
        const itemTotal = item.qty * item.price;
        // Cost is already stored in item.cost, which is calculated based on product type (registered, custom, online)
        const itemCost = item.qty * item.cost;
        transactionGrossProfit += (itemTotal - itemCost);
    });
    const transactionNetProfit = transactionGrossProfit - discount; // Simple net profit for the transaction

    // Decrement stock for all products (registered only)
    currentTransactionItems.forEach(item => {
        if (!item.isCustom && !item.isOnlineShop) { // Only decrement stock for registered products
            const product = products.find(p => p.id === item.productId);
            if (product && product.stock !== undefined) {
                product.stock -= item.qty;
                if (product.stock < 0) product.stock = 0; // Prevent negative stock
            }
        }
    });
    saveProducts(); // Save updated product stock after decrementing

    const transactionRecord = {
        id: 'TRX-' + Date.now(), // Unique transaction ID
        date: new Date().toISOString(),
        items: currentTransactionItems.map(item => ({...item})), // Deep copy items
        subtotalAmount: currentTransactionItems.reduce((sum, item) => sum + (item.qty * item.price), 0),
        discountAmount: discount,
        totalAmount: total,
        paymentAmount: payment,
        changeAmount: payment - total,
        cashier: loggedInUser ? loggedInUser.username : 'Unknown',
        transactionNetProfit: transactionNetProfit,
        paymentMethod: paymentMethod // Store payment method
    };

    return transactionRecord;
}

// NEW: Function to revert stock decrement (if print fails or transaction not committed)
function revertStockDecrement(items) {
    items.forEach(item => {
        if (!item.isCustom && !item.isOnlineShop) { // Only revert stock for registered products
            const product = products.find(p => p.id === item.productId);
            if (product && product.stock !== undefined) {
                product.stock += item.qty; // Add back the original quantity
            }
        }
    });
    saveProducts(); // Save the reverted stock
    console.log("Stock reverted due to transaction not committed.");
}

// NEW: Function to commit transaction data (add to history, update revenue)
function commitTransactionData(transactionRecord) {
    transactionHistory.push(transactionRecord);
    saveTransactionHistory();

    dailyRevenue += transactionRecord.totalAmount;
    saveDailyRevenue();
    updateHeaderDailyRevenue(); // Update the header display

    monthlyNetProfit += transactionRecord.transactionNetProfit;
    saveMonthlyFinancialData();
    renderMonthlyFinancialBar(); // Update the monthly bar

    displayStatus("Transaksi berhasil diproses!", "success");
    playTransactionSuccessSound(); // Play transaction success sound on successful transaction
    startNewTransaction(); // Clear and start new transaction
}

// Helper function to send data in chunks to the printer
async function sendDataToPrinter(data) {
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(data);
    const chunkSize = 500; // Keep chunks below 512 bytes
    for (let i = 0; i < encodedData.length; i += chunkSize) {
        const chunk = encodedData.slice(i, i + chunkSize);
        await printerCharacteristic.writeValue(chunk);
        await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between chunks
    }
}

// NEW: Function to generate and send receipt content to printer
async function printReceiptContent(transactionRecord) {
    if (!bluetoothPrinterDevice || !printerCharacteristic) {
        displayStatus("Printer belum terhubung. Silakan sambungkan printer melalui Pengaturan Printer.", "error");
        printerSettingsModal.classList.remove('hidden');
        return false; // Indicate print failure
    }

    displayStatus("Mengirim struk ke printer...", "info");

    const companyName = "UNIX FASHION";
    const companyAddress = "cilebut-bogor";
    const companyPhone = "0851-7210-7731";

    // Use the provided transactionRecord for printing
    const transactionNumber = transactionRecord.id;
    const cashier = transactionRecord.cashier;
    const paymentMethod = transactionRecord.paymentMethod; // Use actual payment method

    const total = transactionRecord.totalAmount;
    const payment = transactionRecord.paymentAmount;
    const change = transactionRecord.changeAmount;
    const discount = transactionRecord.discountAmount;
    const subtotalBeforeDiscount = transactionRecord.subtotalAmount;

    const now = new Date(transactionRecord.date); // Use transaction date for receipt
    const dateTimeFormatted = now.toLocaleString('id-ID', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    });

    try {
        const encoder = new TextEncoder();
        let printText = "";

        // Header
        printText += centerText(companyName.toUpperCase()) + "\n";
        printText += centerText(companyAddress) + "\n";
        printText += centerText(companyPhone) + "\n";
        printText += "\n"; // Line break

        // Transaction Info
        printText += `No.Transaksi: ${transactionNumber}\n`;
        printText += `Kasir: ${cashier}\n`;
        printText += `Waktu: ${dateTimeFormatted}\n`;
        printText += "--------------------------------\n"; // Separator

        // Items
        for (let item of transactionRecord.items) {
            if (item.name && item.qty > 0) {
                printText += `${item.name}`;
                if (item.isOnlineShop) {
                    printText += ` (${item.marketplace} - ${item.resi})`;
                }
                printText += `\n`;
                const itemSubtotal = item.qty * item.price;
                printText += `  ${item.qty} pcs x ${item.price.toLocaleString('id-ID')}    Rp ${itemSubtotal.toLocaleString('id-ID')}\n`;
            }
        }
        printText += "--------------------------------\n"; // Separator

        // Totals and Payment
        printText += `Subtotal :     Rp ${subtotalBeforeDiscount.toLocaleString('id-ID')}\n`;
        if (discount > 0) {
            printText += `Diskon   :     Rp ${discount.toLocaleString('id-ID')}\n`;
        }
        printText += `Total    :     Rp ${total.toLocaleString('id-ID')}\n`;
        printText += `Bayar    :     Rp ${payment.toLocaleString('id-ID')}\n`;
        printText += `Kembali  :     Rp ${change.toLocaleString('id-ID')}\n`;
        printText += `Metode   :     ${paymentMethod}\n`; // Include payment method
        printText += "\n"; // Line break
        // Footer
        printText += centerText("Terimakasih sudah berbelanja") + "\n";
        printText += centerText("UNIX FASHION") + "\n";
        printText += "\n\n\n"; // Extra line breaks for cutting

        await sendDataToPrinter(printText); // Use the new chunking function
        displayStatus("Struk berhasil dicetak!", "success");
        return true; // Indicate print success

    } catch (error) {
        displayStatus(`Error saat mencetak: ${error.message}.`, "error");
        console.error("Printing error:", error);
        return false; // Indicate print failure
    }
}

// Function to handle printing a NEW receipt (processes transaction, decrements stock, then prints)
async function processAndPrintTransaction() {
    const transactionRecord = createTransactionObjectAndDecrementStock(); // Validate and decrement stock
    if (!transactionRecord) {
        return; // Validation failed, message already displayed by createTransactionObjectAndDecrementStock
    }

    const printSuccess = await printReceiptContent(transactionRecord);

    if (printSuccess) {
        commitTransactionData(transactionRecord); // Commit ONLY if print was successful
    } else {
        revertStockDecrement(transactionRecord.items); // Revert stock if printing fails
    }
}

// NEW: Function to handle reprinting an existing receipt from history (does not affect stock/history)
async function reprintTransactionReceipt(transactionId) {
    const transactionToReprint = transactionHistory.find(t => t.id === transactionId);
    if (!transactionToReprint) {
        displayStatus("Error: Transaksi tidak ditemukan untuk dicetak ulang.", "error");
        return;
    }

    displayStatus("Mencetak ulang struk...", "info");
    await printReceiptContent(transactionToReprint);
}

// NEW: Function to print daily transaction report
async function printDailyReport(dateString) {
    if (!bluetoothPrinterDevice || !printerCharacteristic) {
        displayStatus("Printer belum terhubung. Silakan sambungkan printer melalui Pengaturan Printer.", "error", dailyReportPrintStatusMessage);
        return;
    }

    if (!dateString) {
        displayStatus("Pilih tanggal untuk mencetak laporan.", "error", dailyReportPrintStatusMessage);
        return;
    }

    displayStatus(`Mencetak laporan transaksi untuk tanggal ${new Date(dateString).toLocaleDateString('id-ID')}...`, "info", dailyReportPrintStatusMessage);

    const companyName = "UNIX FASHION";
    const companyAddress = "cilebut-bogor";
    const companyPhone = "0851-7210-7731";

    const selectedDate = new Date(dateString);
    selectedDate.setHours(0, 0, 0, 0); // Start of the day
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1); // End of the day (exclusive)

    const transactionsForDate = transactionHistory.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= selectedDate && transactionDate < nextDay;
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by oldest first for report

    if (transactionsForDate.length === 0) {
        displayStatus(`Tidak ada transaksi untuk tanggal ${new Date(dateString).toLocaleDateString('id-ID')}.`, "error", dailyReportPrintStatusMessage);
        return;
    }

    try {
        let printText = "";
        let totalRevenueToday = 0;

        // Header Laporan
        printText += centerText(companyName.toUpperCase()) + "\n";
        printText += centerText(companyAddress) + "\n";
        printText += centerText(companyPhone) + "\n";
        printText += "\n";
        printText += centerText("LAPORAN TRANSAKSI HARIAN") + "\n";
        printText += centerText(`Tanggal: ${new Date(dateString).toLocaleDateString('id-ID')}`) + "\n";
        printText += "================================\n";

        transactionsForDate.forEach(transaction => {
            // Simplified item display as per user request
            transaction.items.forEach(item => {
                const itemTotal = item.qty * item.price;
                // Format: 1x Kaos          Rp 10.000
                printText += `${item.qty}x ${item.name.padEnd(15)} Rp ${item.price.toLocaleString('id-ID')}\n`;
            });
            totalRevenueToday += transaction.totalAmount; // Accumulate total revenue for the day
        });

        printText += "--------------------------------\n";
        printText += `Total Semua: Rp ${totalRevenueToday.toLocaleString('id-ID')}\n`; // Total keseluruhan sehari
        printText += "================================\n";
        printText += centerText("Terimakasih sudah berbelanja") + "\n";
        printText += centerText("UNIX FASHION") + "\n";
        printText += "\n\n\n"; // Extra line breaks for cutting

        await sendDataToPrinter(printText); // Use the new chunking function
        displayStatus("Laporan harian berhasil dicetak!", "success", dailyReportPrintStatusMessage);

    } catch (error) {
        displayStatus(`Error saat mencetak laporan: ${error.message}.`, "error", dailyReportPrintStatusMessage);
        console.error("Daily report printing error:", error);
    }
}


// Helper function to center text for receipt printing
function centerText(text, width = 32) { // Assuming 32 characters per line for 58mm printer
    const padding = Math.max(0, width - text.length);
    const leftPadding = Math.floor(padding / 2);
    const rightPadding = padding - leftPadding;
    return " ".repeat(leftPadding) + text + " ".repeat(rightPadding);
}


// --- Store Products Functions ---

// Renders the list of products in the store products modal, with optional search filter.
function renderStoreProducts(searchTerm = '') {
    if (!storeProductsTableBody) return;
    storeProductsTableBody.innerHTML = ''; // Clear existing rows

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter products based on search term
    const filteredProducts = products.filter(product => {
        const productName = product.name ? product.name.toLowerCase() : '';
        const productId = product.id ? product.id.toLowerCase() : '';
        return productName.includes(lowerCaseSearchTerm) || productId.includes(lowerCaseSearchTerm);
    });

    if (filteredProducts.length === 0 && searchTerm) {
        const noResultsRow = document.createElement('tr');
        const textClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
        noResultsRow.innerHTML = `<td colspan="5" class="py-4 text-center ${textClass}">Tidak ada produk ditemukan untuk '${searchTerm}'</td>`;
        storeProductsTableBody.appendChild(noResultsRow);
        return;
    } else if (filteredProducts.length === 0 && !searchTerm) {
        const noProductsRow = document.createElement('tr');
        const textClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
        noProductsRow.innerHTML = `<td colspan="5" class="py-4 text-center ${textClass}">Tidak ada produk terdaftar.</td>`;
        storeProductsTableBody.appendChild(noProductsRow);
        return;
    }

    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        const hoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
        const textClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
        const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-200';

        row.className = hoverClass;
        row.innerHTML = `
            <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${product.id}</td>
            <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${product.name}</td>
            <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">Rp ${product.price.toLocaleString('id-ID')}</td>
            <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">${product.stock !== undefined ? product.stock : 'N/A'}</td> <!-- Display stock -->
            <td class="py-2 px-4 border-b ${borderColor} text-center">
                <button class="edit-product-btn text-blue-500 hover:text-blue-700 mr-2" data-product-id="${product.id}" title="Edit Produk">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.38-2.827-2.828z" />
                    </svg>
                </button>
                <button class="delete-product-btn text-red-500 hover:text-red-700" data-product-id="${product.id}" title="Hapus Produk">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        `;
        storeProductsTableBody.appendChild(row);
    });
    saveProducts(); // Save products whenever the store view is updated
}

// Opens the edit form with product data.
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        editProductIdInput.value = product.id;
        editProductNameInput.value = product.name;
        editProductCostInput.value = product.cost !== undefined ? product.cost : 0; // Populate cost
        editProductPriceInput.value = product.price;
        editProductStockInput.value = product.stock !== undefined ? product.stock : 0; // Populate stock
        editProductForm.classList.remove('hidden'); // Show the form
        storeProductsTableContainer.classList.add('hidden'); // Hide the product list
        searchStoreProductsInput.classList.add('hidden'); // Hide search input
    } else {
        console.error("Produk tidak ditemukan untuk diedit:", productId);
    }
}

// Saves changes from the edit form.
function saveProductEdit() {
    const id = editProductIdInput.value;
    const name = editProductNameInput.value.trim();
    const cost = parseFloat(editProductCostInput.value);
    const price = parseFloat(editProductPriceInput.value);
    const stock = parseInt(editProductStockInput.value);

    if (!name || isNaN(cost) || cost < 0 || isNaN(price) || price < 0 || isNaN(stock) || stock < 0) {
        displayStatus("Error: Nama produk, modal, harga, dan stok harus valid!", "error");
        return;
    }

    const productIndex = products.findIndex(p => p.id === id);
    if (productIndex > -1) {
        products[productIndex].name = name;
        products[productIndex].cost = cost; // Save cost
        products[productIndex].price = price;
        products[productIndex].stock = stock; // Save stock
        saveProducts(); // Save changes to localStorage immediately after updating the array
        renderStoreProducts(searchStoreProductsInput.value); // Re-render the list with current search term
        editProductForm.classList.add('hidden'); // Hide the form
        storeProductsTableContainer.classList.remove('hidden'); // Show the product list
        searchStoreProductsInput.classList.remove('hidden'); // Show search input
        displayStatus("Produk berhasil diperbarui!", "success");
    } else {
        console.error("Produk tidak ditemukan saat menyimpan:", id);
    }
}

// Deletes a product from the list.
async function deleteProduct(productId) {
    const confirmed = await confirmAction("Apakah Anda yakin ingin menghapus produk ini?");
    if (confirmed) {
        products = products.filter(p => p.id !== productId);
        renderStoreProducts(searchStoreProductsInput.value); // Re-render the list with current search term
        displayStatus("Produk berhasil dihapus!", "success");
        saveProducts(); // Save changes to localStorage
    }
}

// Custom confirmation modal function.
function confirmAction(message) {
    return new Promise(resolve => {
        confirmationMessage.textContent = message;
        confirmationModal.classList.remove('hidden');
        confirmPromiseResolve = resolve;
    });
}

// Closes the store products modal.
function closeStoreProductsModal() {
    storeProductsModal.classList.add('hidden');
    editProductForm.classList.add('hidden'); // Hide edit form when closing modal
    searchStoreProductsInput.value = ''; // Clear search input
    storeProductsTableContainer.classList.remove('hidden'); // Ensure product list is visible when modal is closed
    searchStoreProductsInput.classList.remove('hidden'); // Ensure search input is visible
    displayStatus("", ""); // Clear status message
}

// --- Add New Product Functions ---
// Calculates and updates the profit field.
function calculateProfit() {
    const cost = parseFloat(addProductCostInput.value) || 0;
    const price = parseFloat(addProductPriceInput.value) || 0;
    const profit = price - cost;
    addProductProfitInput.value = `Rp ${profit.toLocaleString('id-ID')}`;
    if (profit < 0) {
        addProductProfitInput.style.color = 'red';
    } else {
        addProductProfitInput.style.color = ''; // Reset to default
    }
}

// Adds a new product to the `products` array.
function addNewProduct() {
    const id = addProductCodeInput.value.trim();
    const name = addProductNameInput.value.trim();
    const cost = parseFloat(addProductCostInput.value);
    const price = parseFloat(addProductPriceInput.value);
    const stock = parseInt(addProductStockInput.value); // Get stock value

    if (!id || !name || isNaN(cost) || cost < 0 || isNaN(price) || price < 0 || isNaN(stock) || stock < 0) {
        displayStatus("Error: Pastikan semua kolom wajib diisi dengan nilai yang valid!", "error");
        return;
    }

    // Check for duplicate product ID
    if (products.some(p => p.id.toLowerCase() === id.toLowerCase())) {
        displayStatus("Error: Kode Barang sudah ada. Gunakan kode lain atau edit produk yang sudah ada.", "error");
        return;
    }

    products.push({ id: id, name: name, price: price, cost: cost, stock: stock }); // Add cost and stock

    // Clear form
    addProductCodeInput.value = '';
    addProductNameInput.value = '';
    addProductCostInput.value = '0';
    addProductPriceInput.value = '0';
    addProductStockInput.value = '0'; // Clear stock input
    calculateProfit(); // Reset profit display

    closeAddProductModal(); // Close the modal
    displayStatus("Produk baru berhasil ditambahkan!", "success");
    saveProducts(); // Save changes to localStorage immediately after updating the array
}

// Closes the add product modal.
function closeAddProductModal() {
    addProductModal.classList.add('hidden');
    displayStatus("", ""); // Clear status message
}

// --- Expenses Functions (New) ---
// Adds a new expense.
function addExpense() {
    const date = expenseDateInput.value;
    const description = expenseDescriptionInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    if (!date || !description || isNaN(amount) || amount <= 0) {
        displayStatus("Error: Tanggal, deskripsi, dan jumlah pengeluaran harus valid!", "error", expenseStatusMessage);
        return;
    }

    expenses.push({ id: 'EXP-' + Date.now(), date: date, description: description, amount: amount });
    saveExpenses();
    renderExpenses(); // Re-render with new expense
    displayStatus("Pengeluaran berhasil ditambahkan!", "success", expenseStatusMessage);
    // Update monthly expenses and save
    monthlyExpenses += amount;
    saveMonthlyFinancialData();
    renderMonthlyFinancialBar(); // Update the monthly bar
    // Clear form
    expenseDateInput.value = new Date().toISOString().slice(0, 10);
    expenseDescriptionInput.value = '';
    expenseAmountInput.value = '0';
}

// Renders the list of expenses with search and date filters.
function renderExpenses() {
    if (!expensesListBody || !totalExpensesDisplayModal) return;
    expensesListBody.innerHTML = ''; // Clear existing rows

    const searchTerm = expenseSearchInput.value.toLowerCase();
    const startDateStr = expenseFilterStartDate.value;
    const endDateStr = expenseFilterEndDate.value;

    let filteredExpenses = expenses;

    // Apply search filter
    if (searchTerm) {
        filteredExpenses = filteredExpenses.filter(expense =>
            expense.description.toLowerCase().includes(searchTerm)
        );
    }

    // Apply date filter
    if (startDateStr && endDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);

        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    } else if (startDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate;
        });
    } else if (endDateStr) {
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);
        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate <= endDate;
        });
    }

    let totalFilteredExpenses = 0;

    if (filteredExpenses.length === 0) {
        emptyExpensesMessage.classList.remove('hidden');
    } else {
        emptyExpensesMessage.classList.add('hidden');
        // Sort expenses by date, newest first
        filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        filteredExpenses.forEach(expense => {
            const row = document.createElement('tr');
            const hoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
            const textClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
            const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-200';

            row.className = hoverClass;
            const expenseDate = new Date(expense.date).toLocaleDateString('id-ID');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${textClass} ${borderColor}">${expenseDate}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm ${textClass} ${borderColor}">${expense.description}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm ${textClass} text-right ${borderColor}">Rp ${expense.amount.toLocaleString('id-ID')}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${borderColor}">
                    <button class="delete-expense-btn text-red-600 hover:text-red-900" data-expense-id="${expense.id}" title="Hapus Pengeluaran">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </td>
            `;
            expensesListBody.appendChild(row);
            totalFilteredExpenses += expense.amount; // Accumulate total
        });
    }
    totalExpensesDisplayModal.textContent = `Rp ${totalFilteredExpenses.toLocaleString('id-ID')}`;
}

// Deletes an expense.
async function deleteExpense(expenseId) {
    const confirmed = await confirmAction("Apakah Anda yakin ingin menghapus pengeluaran ini?");
    if (confirmed) {
        const deletedExpense = expenses.find(e => e.id === expenseId);
        expenses = expenses.filter(e => e.id !== expenseId);
        saveExpenses();
        renderExpenses(); // Re-render with new expense
        displayStatus("Pengeluaran berhasil ditambahkan!", "success", expenseStatusMessage);

        // Update monthly expenses if the deleted expense was from the current month
        const thisMonth = new Date().toISOString().slice(0, 7);
        const expenseMonth = new Date(deletedExpense.date).toISOString().slice(0, 7);
        if (expenseMonth === thisMonth) {
            monthlyExpenses -= deletedExpense.amount;
            if (monthlyExpenses < 0) monthlyExpenses = 0;
            saveMonthlyFinancialData();
            renderMonthlyFinancialBar(); // Update the monthly bar
        }
        displayStatus("Pengeluaran berhasil dihapus!", "success", expenseStatusMessage);
    } else {
        displayStatus("Penghapusan pengeluaran dibatalkan.", "info", expenseStatusMessage);
    }
}

// Closes the expenses modal.
function closeExpensesModal() {
    expensesModal.classList.add('hidden');
    displayStatus("", "", expenseStatusMessage); // Clear status message inside modal
    displayStatus("", ""); // Clear main status message
    expenseSearchInput.value = ''; // Clear search input on close
    expenseFilterStartDate.value = ''; // Clear date filters on close
    expenseFilterEndDate.value = ''; // Clear date filters on close
}

// NEW: Function to export expenses data to an XLS file
function exportExpensesToXLS() {
    const searchTerm = expenseSearchInput.value.toLowerCase();
    const startDateStr = expenseFilterStartDate.value;
    const endDateStr = expenseFilterEndDate.value;

    let filteredExpenses = expenses;

    // Apply search filter
    if (searchTerm) {
        filteredExpenses = filteredExpenses.filter(expense =>
            expense.description.toLowerCase().includes(searchTerm)
        );
    }

    // Apply date filter
    if (startDateStr && endDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);

        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    } else if (startDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate;
        });
    } else if (endDateStr) {
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);
        filteredExpenses = filteredExpenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate <= endDate;
        });
    }

    if (filteredExpenses.length === 0) {
        displayStatus("Tidak ada data pengeluaran untuk diekspor dalam rentang tanggal ini.", "error", expenseStatusMessage);
        return;
    }

    const reportData = [];

    // Header for the report
    reportData.push(["Laporan Pengeluaran"]);
    if (startDateStr && endDateStr) {
        reportData.push([`Periode: ${new Date(startDateStr).toLocaleDateString('id-ID')} - ${new Date(endDateStr).toLocaleDateString('id-ID')}`]);
    } else if (startDateStr) {
        reportData.push([`Dari Tanggal: ${new Date(startDateStr).toLocaleDateString('id-ID')}`]);
    } else if (endDateStr) {
        reportData.push([`Sampai Tanggal: ${new Date(endDateStr).toLocaleDateString('id-ID')}`]);
    } else {
        reportData.push(["Periode: Semua Data"]);
    }
    reportData.push([]); // Empty row for spacing

    // Expenses Detail
    reportData.push(["Detail Pengeluaran"]);
    reportData.push(["Tanggal", "Deskripsi", "Jumlah"]);
    let totalExportedExpenses = 0;
    filteredExpenses.forEach(expense => {
        const expenseDate = new Date(expense.date).toLocaleDateString('id-ID');
        reportData.push([
            expenseDate,
            expense.description,
            expense.amount
        ]);
        totalExportedExpenses += expense.amount;
    });
    reportData.push([]); // Empty row for spacing
    reportData.push(["Total Pengeluaran", totalExportedExpenses]);

    // Create a new workbook and add a worksheet
    const ws = XLSX.utils.aoa_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Laporan Pengeluaran");

    // Generate file name
    const fileName = `Laporan_Pengeluaran_${startDateStr || 'All'}_${endDateStr || 'Data'}.xlsx`;

    // Write and download the file
    try {
        XLSX.writeFile(wb, fileName);
        displayStatus("Laporan pengeluaran berhasil diekspor ke Excel!", "success", expenseStatusMessage);
    } catch (e) {
        console.error("Error exporting expenses to XLS:", e);
        displayStatus("Gagal mengekspor laporan pengeluaran. Pastikan browser Anda mendukung fitur ini.", "error", expenseStatusMessage);
    }
}

// --- Financial Report Functions ---
function calculateFinancialReport() {
    const startDateStr = reportStartDateInput.value;
    const endDateStr = reportEndDateInput.value;
    let filteredTransactions = transactionHistory;
    let filteredExpenses = expenses; // Use new expenses array

    if (startDateStr && endDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0); // Start of the day
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999); // End of the day

        filteredTransactions = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate && transactionDate <= endDate;
        });
        filteredExpenses = expenses.filter(expense => { // Filter expenses by date
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });

    } else if (startDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        filteredTransactions = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate;
        });
        filteredExpenses = expenses.filter(expense => { // Filter expenses by date
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate;
        });
    } else if (endDateStr) {
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);
        filteredTransactions = filteredTransactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate <= endDate;
        });
        filteredExpenses = expenses.filter(expense => { // Filter expenses by date
            const expenseDate = new Date(expense.date);
            return expenseDate <= endDate;
        });
    }

    let totalRevenue = 0;
    let totalCostOfGoodsSold = 0; // COGS
    let totalExpenses = 0;

    filteredTransactions.forEach(transaction => {
        totalRevenue += transaction.totalAmount; // This total is already after discount
        transaction.items.forEach(item => {
            // Calculate cost of goods sold based on product type
            // For registered products, cost is `item.cost` (from product's cost field)
            // For custom products, cost is 80% of `item.price` (as per 20% margin rule)
            // For online shop products, cost is 75% of `item.price` (as per 25% margin rule)
            if (item.isCustom) {
                totalCostOfGoodsSold += (item.price * 0.8) * item.qty;
            } else if (item.isOnlineShop) {
                totalCostOfGoodsSold += (item.price * 0.75) * item.qty;
            }
            else {
                totalCostOfGoodsSold += item.cost * item.qty;
            }
        });
    });

    // Calculate total expenses from the filtered list
    filteredExpenses.forEach(expense => {
        totalExpenses += expense.amount;
    });

    const grossProfit = totalRevenue - totalCostOfGoodsSold;
    const netProfit = grossProfit - totalExpenses; // Net profit now accounts for expenses

    totalRevenueDisplay.textContent = `Rp ${totalRevenue.toLocaleString('id-ID')}`;
    totalExpensesDisplay.textContent = `Rp ${totalExpenses.toLocaleString('id-ID')}`;
    grossProfitDisplay.textContent = `Rp ${grossProfit.toLocaleString('id-ID')}`;
    netProfitDisplay.textContent = `Rp ${netProfit.toLocaleString('id-ID')}`;

    if (financialReportMessageBox) {
        if (filteredTransactions.length === 0 && filteredExpenses.length === 0) {
            financialReportMessageBox.classList.remove('hidden');
            financialReportMessageBox.textContent = "Tidak ada data transaksi atau pengeluaran untuk rentang tanggal yang dipilih.";
        } else {
            financialReportMessageBox.classList.add('hidden');
            financialReportMessageBox.textContent = '';
        }
    }

    // Prepare data for chart
    const chartData = [totalRevenue, totalExpenses, grossProfit, netProfit];
    renderFinancialReportChart(chartData);
}

// Renders the financial report chart using Chart.js.
function renderFinancialReportChart(data) {
    const ctx = financialChartCanvas.getContext('2d');
    if (window.myFinancialChart) {
        window.myFinancialChart.destroy();
    }

    // Define colors based on dark mode state
    const textColor = isDarkMode ? '#e2e8f0' : '#1a202c'; // Light text for dark mode, dark for light
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'; // Light grid for dark mode

    window.myFinancialChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pendapatan', 'Pengeluaran', 'Laba Kotor', 'Laba Bersih'],
            datasets: [{
                label: 'Jumlah (Rp)',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Ringkasan Keuangan',
                    color: textColor // Apply text color to title
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColor // Apply text color to y-axis ticks
                    },
                    grid: {
                        color: gridColor // Apply grid color
                    }
                },
                x: {
                    ticks: {
                        color: textColor // Apply text color to x-axis ticks
                    },
                    grid: {
                        color: gridColor // Apply grid color
                    }
                }
            }
        }
    });
}

// Function to export financial report data to an XLS file
function exportFinancialReportToXLS() {
    const startDateStr = reportStartDateInput.value;
    const endDateStr = reportEndDateInput.value;

    let filteredTransactions = transactionHistory;
    let filteredExpenses = expenses;

    if (startDateStr && endDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);

        filteredTransactions = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate && transactionDate <= endDate;
        });
        filteredExpenses = expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate && expenseDate <= endDate;
        });
    } else if (startDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        filteredTransactions = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate;
        });
        filteredExpenses = expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate >= startDate;
        });
    } else if (endDateStr) {
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);
        filteredTransactions = filteredTransactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate <= endDate;
        });
        filteredExpenses = expenses.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate <= endDate;
        });
    }

    if (filteredTransactions.length === 0 && filteredExpenses.length === 0) {
        displayStatus("Tidak ada data transaksi atau pengeluaran untuk diekspor dalam rentang tanggal ini.", "error", financialReportMessageBox);
        return;
    }

    const reportData = [];

    // Header for the report
    reportData.push(["Laporan Keuangan"]);
    if (startDateStr && endDateStr) {
        reportData.push([`Periode: ${new Date(startDateStr).toLocaleDateString('id-ID')} - ${new Date(endDateStr).toLocaleDateString('id-ID')}`]);
    } else if (startDateStr) {
        reportData.push([`Dari Tanggal: ${new Date(startDateStr).toLocaleDateString('id-ID')}`]);
    } else if (endDateStr) {
        reportData.push([`Sampai Tanggal: ${new Date(endDateStr).toLocaleDateString('id-ID')}`]);
    } else {
        reportData.push(["Periode: Semua Data"]);
    }
    reportData.push([]); // Empty row for spacing

    // Summary Section
    let totalRevenue = 0;
    let totalCostOfGoodsSold = 0;
    let totalExpenses = 0;

    filteredTransactions.forEach(transaction => {
        totalRevenue += transaction.totalAmount; // This total is already after discount
        transaction.items.forEach(item => {
            // Calculate cost of goods sold based on product type
            // For registered products, cost is `item.cost` (from product's cost field)
            // For custom products, cost is 80% of `item.price` (as per 20% margin rule)
            // For online shop products, cost is 75% of `item.price` (as per 25% margin rule)
            if (item.isCustom) {
                totalCostOfGoodsSold += (item.price * 0.8) * item.qty;
            } else if (item.isOnlineShop) {
                totalCostOfGoodsSold += (item.price * 0.75) * item.qty;
            }
            else {
                totalCostOfGoodsSold += item.cost * item.qty;
            }
        });
    });

    filteredExpenses.forEach(expense => {
        totalExpenses += expense.amount;
    });

    const grossProfit = totalRevenue - totalCostOfGoodsSold;
    const netProfit = grossProfit - totalExpenses;

    reportData.push(["Ringkasan Keuangan"]);
    reportData.push(["Pendapatan", totalRevenue]);
    reportData.push(["Pengeluaran", totalExpenses]);
    reportData.push(["Laba Kotor", grossProfit]);
    reportData.push(["Laba Bersih", netProfit]);
    reportData.push([]); // Empty row for spacing

    // Transactions Detail
    if (filteredTransactions.length > 0) {
        reportData.push(["Detail Transaksi"]);
        reportData.push(["ID Transaksi", "Tanggal", "Kasir", "Subtotal", "Diskon", "Total Pembayaran", "Jumlah Dibayar", "Kembali", "Metode Pembayaran", "Laba Bersih Transaksi"]);
        filteredTransactions.forEach(transaction => {
            const transactionDate = new Date(transaction.date).toLocaleString('id-ID', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit'
            });
            reportData.push([
                transaction.id,
                transactionDate,
                transaction.cashier || 'N/A',
                transaction.subtotalAmount,
                transaction.discountAmount,
                transaction.totalAmount,
                transaction.paymentAmount,
                transaction.changeAmount,
                transaction.paymentMethod,
                transaction.transactionNetProfit
            ]);
            // Add transaction items as sub-rows
            if (transaction.items && transaction.items.length > 0) {
                reportData.push(["", "", "", "Detail Item:"]);
                reportData.push(["", "", "", "Produk", "Qty", "Harga Satuan", "Total Item", "Marketplace", "Nomor Resi"]); // Added marketplace and resi
                transaction.items.forEach(item => {
                    reportData.push([
                        "", "", "",
                        item.name,
                        item.qty,
                        item.price,
                        item.qty * item.price,
                        item.marketplace || '', // Add marketplace
                        item.resi || '' // Add resi
                    ]);
                });
            }
        });
        reportData.push([]); // Empty row for spacing
    }

    // Expenses Detail
    if (filteredExpenses.length > 0) {
        reportData.push(["Detail Pengeluaran"]);
        reportData.push(["Tanggal", "Deskripsi", "Jumlah"]);
        filteredExpenses.forEach(expense => {
            const expenseDate = new Date(expense.date).toLocaleDateString('id-ID');
            reportData.push([
                expenseDate,
                expense.description,
                expense.amount
            ]);
        });
        reportData.push([]); // Empty row for spacing
    }

    // Create a new workbook and add a worksheet
    const ws = XLSX.utils.aoa_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Laporan Keuangan");

    // Generate file name
    const fileName = `Laporan_Keuangan_${startDateStr || 'All'}_${endDateStr || 'Data'}.xlsx`;

    // Write and download the file
    try {
        XLSX.writeFile(wb, fileName);
        displayStatus("Laporan keuangan berhasil diekspor ke Excel!", "success", financialReportMessageBox);
    } catch (e) {
        console.error("Error exporting to XLS:", e);
        displayStatus("Gagal mengekspor laporan keuangan. Pastikan browser Anda mendukung fitur ini.", "error", financialReportMessageBox);
    }
}


// --- Data Import/Export Functions ---
// Exports all products to a JSON file.
function exportProducts() {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pos_products_export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    displayStatus("Data produk berhasil diekspor!", "success");
}

// Imports products from a JSON file.
function importProducts(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const importedProducts = JSON.parse(e.target.result);
            if (!Array.isArray(importedProducts) || !importedProducts.every(p => p.id && p.name && typeof p.price === 'number')) {
                displayStatus("Error: Format file produk tidak valid.", "error");
                return;
            }

            const confirmed = await confirmAction("Ini akan menimpa data produk yang ada. Lanjutkan?");
            if (confirmed) {
                products = importedProducts;
                saveProducts();
                renderStoreProducts(); // Re-render store products after import
                displayStatus("Data produk berhasil diimpor!", "success");
            } else {
                displayStatus("Impor produk dibatalkan.", "info");
            }

        } catch (error) {
            displayStatus("Error memproses file produk: " + error.message + " Pastikan file JSON valid.", "error");
            console.error("Error importing products:", error);
        }
    };
    reader.readAsText(file);
}

// Exports all application data (products and transactions) to a JSON file.
function exportAllData() {
    const appData = {
        products: products,
        transactions: transactionHistory,
        expenses: expenses,
        users: users, // New: Include users in export
        dailyRevenue: dailyRevenue,
        lastRecordedDate: lastRecordedDate,
        isRevenueVisible: isRevenueVisible,
        isDarkMode: isDarkMode, // New: Include dark mode state in export
        monthlyNetProfit: monthlyNetProfit, // New: Include monthly net profit
        monthlyExpenses: monthlyExpenses,   // New: Include monthly expenses
        lastRecordedMonth: lastRecordedMonth, // New: Include last recorded month
        // Store the last connected printer's device ID
        lastConnectedPrinterId: bluetoothPrinterDevice ? bluetoothPrinterDevice.id : null
    };
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pos_app_data_full_export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    displayStatus("Data aplikasi lengkap berhasil diekspor!", "success");
}

// Imports all application data (products and transactions) from a JSON file.
function importAllData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            // expenses and users are optional as they're newer additions
            if (!importedData.products || !importedData.transactions) {
                displayStatus("Error: Format file data aplikasi tidak valid. Pastikan berisi 'products' dan 'transactions'.", "error");
                return;
            }

            const confirmed = await confirmAction("Ini akan menimpa SEMUA data aplikasi yang ada (produk, transaksi, dll). Lanjutkan?");
            if (confirmed) {
                products = importedData.products;
                transactionHistory = importedData.transactions;
                expenses = importedData.expenses || [];
                users = importedData.users || [{ username: 'admin', password: 'admin', role: 'admin' }]; // Import users, default if not present
                dailyRevenue = importedData.dailyRevenue || 0;
                lastRecordedDate = importedData.lastRecordedDate || '';
                isRevenueVisible = typeof importedData.isRevenueVisible !== 'undefined' ? importedData.isRevenueVisible : true;
                isDarkMode = typeof importedData.isDarkMode !== 'undefined' ? importedData.isDarkMode : false; // New: Import dark mode state

                // New: Import monthly financial data
                monthlyNetProfit = importedData.monthlyNetProfit || 0;
                monthlyExpenses = importedData.monthlyExpenses || 0;
                lastRecordedMonth = importedData.lastRecordedMonth || '';

                // Restore last connected printer ID (but not the device object itself)
                const storedPrinterId = importedData.lastConnectedPrinterId || null;
                if (storedPrinterId) {
                    localStorage.setItem(LOCAL_STORAGE_PRINTER_ID_KEY, storedPrinterId);
                } else {
                    localStorage.removeItem(LOCAL_STORAGE_PRINTER_ID_KEY);
                }

                // IMPORTANT: Logged in user is NOT imported from app data.
                // It should be handled by sessionStorage (for session-based login) or re-login.
                // After importing, the app will return to the login screen.
                loggedInUser = null;
                sessionStorage.removeItem(SESSION_STORAGE_LOGGED_IN_USER_KEY); // Explicitly clear session storage for logged in user

                saveProducts();
                saveTransactionHistory();
                saveExpenses();
                saveUsers(); // Save imported users (this will also clear session user, consistent with loggedInUser = null)
                saveDailyRevenue();
                saveRevenueVisibility();
                saveDarkModeState(); // New: Save imported dark mode state
                saveMonthlyFinancialData(); // New: Save imported monthly financial data

                // Re-render all necessary components and reset UI state
                renderStoreProducts();
                updateHeaderDailyRevenue();
                updateCashierDisplay(); // Update cashier display to reflect no logged in user initially
                applyDarkMode(); // Apply imported dark mode state
                renderMonthlyFinancialBar(); // Render the monthly bar after import

                // Attempt to reconnect to the printer after import
                loadSavedPrinter();
                updatePrinterConnectionStatus("Silahkan sambungkan printer"); // Reset printer status

                // Redirect to login screen after successful import and state reset
                loginScreen.classList.remove('hidden');
                mainAppContainer.classList.add('hidden');
            } else {
                displayStatus("Impor data aplikasi dibatalkan.", "info");
            }

        } catch (error) {
            displayStatus("Error memproses file data aplikasi: " + error.message + " Pastikan file JSON valid.", "error");
            console.error("Error importing all data:", error);
        }
    };
    reader.readAsText(file);
}

// Function to perform the actual data reset
function performResetAllData() {
    products = [];
    transactionHistory = [];
    expenses = [];
    users = [{ username: 'admin', password: 'admin', role: 'admin' }]; // Reset to default admin user
    loggedInUser = null; // Clear logged-in user
    dailyRevenue = 0;
    lastRecordedDate = '';
    isRevenueVisible = true;
    isDarkMode = false; // Reset dark mode to default (light)
    monthlyNetProfit = 0; // Reset monthly financial data
    monthlyExpenses = 0;
    lastRecordedMonth = '';
    bluetoothPrinterDevice = null; // Clear printer connection
    printerCharacteristic = null;

    // Clear all relevant local and session storage items
    localStorage.clear();
    sessionStorage.clear();

    // Re-initialize all data after clearing
    loadProducts(); // This will also call renderProductDatalist()
    loadExpenses();
    loadUsers(); // This will re-add the default admin and clear session user
    loadDailyRevenue();
    loadRevenueVisibility();
    loadDarkModeState(); // Load default dark mode state
    loadMonthlyFinancialData(); // Load default monthly financial data

    // Save initial states to localStorage (users are saved by loadUsers)
    saveProducts(); // This will also call renderProductDatalist()
    saveTransactionHistory();
    saveExpenses();
    saveDailyRevenue();
    saveRevenueVisibility();
    saveDarkModeState(); // Save default dark mode state
    saveMonthlyFinancialData(); // Save default monthly financial data
    localStorage.removeItem(LOCAL_STORAGE_PRINTER_ID_KEY); // Clear saved printer ID

    startNewTransaction();
    renderStoreProducts();
    updateHeaderDailyRevenue();
    updateCashierDisplay(); // Update cashier display after reset
    applyDarkMode(); // Apply default dark mode state
    renderMonthlyFinancialBar(); // Render the monthly bar
    updatePrinterConnectionStatus("Silahkan sambungkan printer"); // Reset printer status
    displayStatus("Semua data aplikasi telah direset!", "success");
}

// Function to open the reset data confirmation modal
function openResetDataConfirmation() {
    resetDataModal.classList.remove('hidden');
    resetPasswordInput.value = ''; // Clear input field
    resetDataMessage.classList.add('hidden'); // Hide any previous messages
}


// --- Transaction History Functions ---
// Renders the list of transactions in the history modal, with optional date filter.
function renderTransactionHistory(startDateStr = '', endDateStr = '') {
    if (!transactionHistoryTableBody || !totalTransactionsAmount) return;
    transactionHistoryTableBody.innerHTML = ''; // Clear existing rows

    let filteredHistory = transactionHistory;

    if (startDateStr && endDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0); // Start of the day
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999); // End of the day

        filteredHistory = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate && transactionDate <= endDate;
        });
    } else if (startDateStr) {
        const startDate = new Date(startDateStr);
        startDate.setHours(0, 0, 0, 0);
        filteredHistory = transactionHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= startDate;
        });
    } else if (endDateStr) {
        const endDate = new Date(endDateStr);
        endDate.setHours(23, 59, 59, 999);
        filteredHistory = filteredHistory.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            return transactionDate <= endDate;
        });
    }

    let totalAmountFilteredTransactions = 0;

    if (filteredHistory.length === 0) {
        transactionHistoryMessageBox.classList.remove('hidden');
        transactionHistoryMessageBox.textContent = "Tidak ada transaksi dalam riwayat." + (startDateStr || endDateStr ? " untuk rentang tanggal yang dipilih." : "");
        totalAmountFilteredTransactions = 0; // Reset total if no transactions
    } else {
        transactionHistoryMessageBox.classList.add('hidden');
    }

    filteredHistory.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by most recent first

    filteredHistory.forEach(transaction => {
        const row = document.createElement('tr');
        const hoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
        const textClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
        const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-200';

        row.className = hoverClass;
        const transactionDate = new Date(transaction.date).toLocaleString('id-ID', {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        row.innerHTML = `
            <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${transaction.id}</td>
            <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${transactionDate}</td>
            <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${transaction.cashier || 'N/A'}</td>
            <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">Rp ${transaction.totalAmount.toLocaleString('id-ID')}</td>
            <td class="py-2 px-4 border-b ${borderColor} text-center">
                <button class="view-detail-btn text-blue-500 hover:text-blue-700 mr-2" data-transaction-id="${transaction.id}" title="Lihat Detail">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
                <button class="delete-transaction-btn text-red-500 hover:text-red-700" data-transaction-id="${transaction.id}" title="Hapus Transaksi">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                </button>
            </td>
        `;
        transactionHistoryTableBody.appendChild(row);
        totalAmountFilteredTransactions += transaction.totalAmount; // Accumulate total
    });
    totalTransactionsAmount.textContent = `Rp ${totalAmountFilteredTransactions.toLocaleString('id-ID')}`;
}

// Displays detailed information for a specific transaction.
function viewTransactionDetails(transactionId) {
    const transaction = transactionHistory.find(t => t.id === transactionId);
    if (!transaction) {
        displayStatus("Error: Transaksi tidak ditemukan.", "error");
        return;
    }

    // Hide main history list and show detail section
    document.getElementById('transaction-history-table-body').parentElement.classList.add('hidden');
    document.getElementById('transaction-history-message-box').classList.add('hidden');
    historyFilterControls.classList.add('hidden'); // Hide filter controls
    totalTransactionsAmount.parentElement.classList.add('hidden'); // Hide total transactions amount
    transactionDetailSection.classList.remove('hidden');

    // Store the transaction ID on the reprint button
    reprintReceiptBtn.dataset.transactionId = transaction.id;

    // Populate detail fields
    detailTransactionId.textContent = transaction.id;
    detailTransactionDate.textContent = new Date(transaction.date).toLocaleString('id-ID', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    detailCashier.textContent = transaction.cashier || 'N/A';
    detailSubtotal.textContent = `Rp ${transaction.subtotalAmount.toLocaleString('id-ID')}`;
    detailDiscount.textContent = `Rp ${transaction.discountAmount.toLocaleString('id-ID')}`;
    detailTotalAmount.textContent = `Rp ${transaction.totalAmount.toLocaleString('id-ID')}`;
    detailPaymentAmount.textContent = `Rp ${transaction.paymentAmount.toLocaleString('id-ID')}`;
    detailChangeAmount.textContent = `Rp ${transaction.changeAmount.toLocaleString('id-ID')}`;

    // Populate item list for details
    detailItemList.innerHTML = '';
    if (transaction.items && transaction.items.length > 0) {
        transaction.items.forEach(item => {
            const row = document.createElement('tr');
            const textClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
            const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-200';
            row.innerHTML = `
                <td class="py-2 px-4 border-b ${borderColor} ${textClass}">${item.name} ${item.isOnlineShop ? `(${item.marketplace} - ${item.resi})` : ''}</td>
                <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">${item.qty}</td>
                <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">Rp ${item.price.toLocaleString('id-ID')}</td>
                <td class="py-2 px-4 border-b ${borderColor} text-right ${textClass}">Rp ${(item.qty * item.price).toLocaleString('id-ID')}</td>
            `;
            detailItemList.appendChild(row);
        });
    } else {
        const textClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
        detailItemList.innerHTML = `<tr><td colspan="4" class="py-4 text-center ${textClass}">Tidak ada item dalam transaksi ini.</td></tr>`;
    }
}

// Hides the transaction detail section and shows the history list.
function closeTransactionDetails() {
    transactionDetailSection.classList.add('hidden');
    document.getElementById('transaction-history-table-body').parentElement.classList.remove('hidden');
    historyFilterControls.classList.remove('hidden'); // Show filter controls
    totalTransactionsAmount.parentElement.classList.remove('hidden'); // Show total transactions amount
    renderTransactionHistory(historyStartDateInput.value, historyEndDateInput.value); // Re-render history list
}

// Deletes a transaction and returns stock for registered products.
async function deleteTransaction(transactionId) {
    const confirmed = await confirmAction("Apakah Anda yakin ingin menghapus transaksi ini? Stok produk terdaftar akan dikembalikan.");
    if (!confirmed) return;

    const transactionIndex = transactionHistory.findIndex(t => t.id === transactionId);
    if (transactionIndex > -1) {
        const transactionToDelete = transactionHistory[transactionIndex];

        // Return stock for all products, only if it's a registered product
        transactionToDelete.items.forEach(item => {
            if (!item.isCustom && !item.isOnlineShop) { // Check if it's NOT a custom or online shop product
                const product = products.find(p => p.id === item.productId);
                if (product && product.stock !== undefined) {
                    product.stock += item.qty;
                }
            }
        });

        transactionHistory.splice(transactionIndex, 1); // Remove transaction
        saveTransactionHistory(); // Save updated history
        saveProducts(); // Save updated products (stock changes)

        // Recalculate daily revenue if the deleted transaction was from the current day
        const today = new Date().toISOString().slice(0, 10);
        const transactionDate = new Date(transactionToDelete.date).toISOString().slice(0, 10);
        if (transactionDate === today) {
            dailyRevenue -= transactionToDelete.totalAmount;
            if (dailyRevenue < 0) dailyRevenue = 0; // Prevent negative revenue
            saveDailyRevenue();
            updateHeaderDailyRevenue();
        }

        // Recalculate monthly net profit if the deleted transaction was from the current month
        const thisMonth = new Date().toISOString().slice(0, 7);
        const transactionMonth = new Date(transactionToDelete.date).toISOString().slice(0, 7);
        if (transactionMonth === thisMonth && transactionToDelete.transactionNetProfit !== undefined) {
            monthlyNetProfit -= transactionToDelete.transactionNetProfit;
            saveMonthlyFinancialData();
            renderMonthlyFinancialBar(); // Update the monthly bar
        }

        renderTransactionHistory(historyStartDateInput.value, historyEndDateInput.value); // Re-render the list
        displayStatus("Transaksi berhasil dihapus dan stok dikembalikan!", "success");
    } else {
        displayStatus("Penghapusan transaksi dibatalkan.", "info");
    }
}

// --- User Management Functions (New) ---

// Main login function for the initial login screen.
function loginUser() {
    const username = loginScreenUsernameInput.value.trim();
    const password = loginScreenPasswordInput.value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loggedInUser = user;
        saveUsers(); // Save logged-in user state (to sessionStorage)
        updateCashierDisplay(); // Update display in header
        displayStatus(`Selamat datang, ${user.username}! Anda login sebagai ${user.role}.`, "success", loginScreenMessage);

        // Hide login screen, show main app
        loginScreen.classList.add('hidden');
        mainAppContainer.classList.remove('hidden');
        startNewTransaction(); // Start a new transaction after login
        // Clear login fields
        loginScreenUsernameInput.value = '';
        loginScreenPasswordInput.value = '';
        displayStatus("", "", loginScreenMessage); // Clear message
    } else {
        displayStatus("Username atau password salah!", "error", loginScreenMessage);
    }
}

// Handles user login *within the user settings modal*.
function userSettingsLogin() {
    const username = userSettingsLoginUsernameInput.value.trim();
    const password = userSettingsLoginPasswordInput.value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loggedInUser = user;
        saveUsers(); // Save logged-in user state (to sessionStorage)
        updateCashierDisplay(); // Update display in header
        displayStatus(`Selamat datang, ${user.username}! Anda login sebagai ${user.role}.`, "success", userSettingsLoginStatusMessage);
        showUserManagementSection(); // Re-evaluate and show/hide sections
    } else {
        displayStatus("Username atau password salah!", "error", userSettingsLoginStatusMessage);
    }
}

// Handles user logout.
function logoutUser() {
    const confirmed = confirm("Apakah Anda yakin ingin logout?");
    if (!confirmed) return;

    loggedInUser = null;
    saveUsers(); // Clear logged-in user state (from sessionStorage)
    updateCashierDisplay(); // Update display in header
    displayStatus("Anda telah logout.", "info");

    // Show the main login screen and hide the main app
    loginScreen.classList.remove('hidden');
    mainAppContainer.classList.add('hidden');
    startNewTransaction(); // Reset transaction state

    // If user settings modal is open, ensure it shows the login section
    if (!userSettingsModal.classList.contains('hidden')) {
        showUserManagementSection(); // This will show login if no user is logged in
    }
}

// Adds a new user (cashier or admin).
function addNewUser() {
    const username = newUserNameInput.value.trim();
    const password = newUserPasswordInput.value.trim();
    const role = newUserRoleSelect.value;

    if (!username || !password) {
        displayStatus("Username dan password wajib diisi!", "error", addUserStatusMessage);
        return;
    }

    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        displayStatus("Username sudah ada. Pilih username lain.", "error", addUserStatusMessage);
        return;
    }

    users.push({ username, password, role });
    saveUsers();
    renderUserList(); // Update the displayed user list
    displayStatus("Pengguna baru berhasil ditambahkan!", "success", addUserStatusMessage);
    newUserNameInput.value = '';
    newUserPasswordInput.value = '';
    newUserRoleSelect.value = 'cashier'; // Reset to default
}

// Renders the list of users in the user management section.
function renderUserList() {
    if (!userListBody || !emptyUserMessage) return;
    userListBody.innerHTML = '';

    if (users.length === 0) {
        emptyUserMessage.classList.remove('hidden');
    } else {
        emptyUserMessage.classList.add('hidden');
        users.forEach(user => {
            const row = document.createElement('tr');
            const hoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
            const textClass = isDarkMode ? 'text-gray-200' : 'text-gray-700';
            const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-200';

            row.className = hoverClass;
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium ${textClass} ${borderColor}">${user.username}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm ${textClass} ${borderColor}">${user.role}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${borderColor}">
                    ${(loggedInUser && loggedInUser.username === user.username) ? '' : ` <!-- Prevent deleting the currently logged-in user -->
                    ${user.username.toLowerCase() !== 'admin' ? ` <!-- Prevent deleting default admin -->
                    <button class="delete-user-btn text-red-600 hover:text-red-900" data-username="${user.username}" title="Hapus Pengguna">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    ` : ''}
                    `}
                </td>
            `;
            userListBody.appendChild(row);
        });
    }
}

// Deletes a user.
async function deleteUser(username) {
    if (username.toLowerCase() === 'admin') { // Prevent deleting default admin
        displayStatus("Tidak dapat menghapus pengguna 'admin' default.", "error", addUserStatusMessage);
        return;
    }
    if (loggedInUser && loggedInUser.username.toLowerCase() === username.toLowerCase()) { // Prevent deleting currently logged-in user
        displayStatus("Tidak dapat menghapus pengguna yang sedang login.", "error", addUserStatusMessage);
        return;
    }

    const confirmed = await confirmAction(`Apakah Anda yakin ingin menghapus pengguna '${username}'?`);
    if (confirmed) {
        users = users.filter(u => u.username.toLowerCase() !== username.toLowerCase());
        saveUsers();
        renderUserList();
        displayStatus("Pengguna berhasil dihapus!", "success", addUserStatusMessage);
    } else {
        displayStatus("Penghapusan pengguna dibatalkan.", "info", addUserStatusMessage);
    }
}

// Shows/hides sections within the User Settings modal based on login status and role.
function showUserManagementSection() {
    if (loggedInUser && loggedInUser.role === 'admin') {
        userSettingsLoginSection.classList.add('hidden');
        userManagementSection.classList.remove('hidden');
        renderUserList(); // Render user list when admin section is shown
    } else {
        userSettingsLoginSection.classList.remove('hidden');
        userManagementSection.classList.add('hidden');
        // Clear login fields and messages when showing login section
        userSettingsLoginUsernameInput.value = '';
        userSettingsLoginPasswordInput.value = '';
        displayStatus("", "", userSettingsLoginStatusMessage);
    }
}

// Opens the user settings modal.
function openUserSettingsModal() {
    userSettingsModal.classList.remove('hidden');
    adminMenuDropdown.classList.add('hidden');
    showUserManagementSection(); // Determine which section to show
}

// Closes the user settings modal.
function closeUserSettingsModal() {
    userSettingsModal.classList.add('hidden');
    displayStatus("", "", userSettingsLoginStatusMessage); // Clear status messages
    displayStatus("", "", addUserStatusMessage);
}

// --- Bluetooth Printer Functions (New) ---

// Updates the printer connection status in the modal and button states.
function updatePrinterConnectionStatus(message, isConnected = false) {
    if (printerStatus) printerStatus.textContent = `Status: ${message}`;
    if (connectPrinterBtn) connectPrinterBtn.disabled = isConnected;
    if (disconnectPrinterBtn) disconnectPrinterBtn.disabled = !isConnected;
    if (testPrintBtn) testPrintBtn.disabled = !isConnected;
    if (printDailyReportBtn) printDailyReportBtn.disabled = !isConnected; // Disable daily report print if not connected
}

// Stores the connected printer's ID in local storage.
function savePrinterAddress(deviceId) {
    try {
        localStorage.setItem(LOCAL_STORAGE_PRINTER_ID_KEY, deviceId);
        console.log("Printer ID saved:", deviceId);
    } catch (e) {
        console.error("Gagal menyimpan ID printer ke localStorage:", e);
    }
}

// Clears the stored printer ID from local storage.
function clearSavedPrinter() {
    try {
        localStorage.removeItem(LOCAL_STORAGE_PRINTER_ID_KEY);
        console.log("Printer ID dihapus dari localStorage.");
    } catch (e) {
        console.error("Gagal menghapus ID printer dari localStorage:", e);
    }
}

// Attempts to connect to a Bluetooth printer.
async function connectPrinter() {
    try {
        updatePrinterConnectionStatus("Mencari printer...", false);
        // Request any Bluetooth device, specifying the common service for printers
        bluetoothPrinterDevice = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true, // Allow all devices to be shown
            optionalServices: ['000018f0-0000-1000-8000-00805f9b34fb'] // Common Bluetooth SPP service for printers (Bluetooth Serial Port Profile)
        });

        if (!bluetoothPrinterDevice) {
            updatePrinterConnectionStatus("Pencarian printer dibatalkan.");
            return;
        }

        updatePrinterConnectionStatus("Menghubungkan ke printer...", false);
        const server = await bluetoothPrinterDevice.gatt.connect();

        // Add listener for GATT server disconnected event
        bluetoothPrinterDevice.addEventListener('gattserverdisconnected', onPrinterDisconnected);

        // Get the primary service and characteristic
        const service = await server.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb');
        printerCharacteristic = await service.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb'); // Printer output characteristic

        updatePrinterConnectionStatus(`Printer terhubung: ${bluetoothPrinterDevice.name || bluetoothPrinterDevice.id}`, true);
        savePrinterAddress(bluetoothPrinterDevice.id); // Save device ID for future auto-reconnection

    } catch (error) {
        console.error("Koneksi printer error:", error);
        updatePrinterConnectionStatus(`Error: ${error.message}`);
        bluetoothPrinterDevice = null;
        printerCharacteristic = null;
        clearSavedPrinter(); // Clear saved printer on connection failure
    }
}

// Disconnects from the Bluetooth printer.
function disconnectPrinter() {
    if (bluetoothPrinterDevice && bluetoothPrinterDevice.gatt.connected) {
        try {
            bluetoothPrinterDevice.gatt.disconnect();
            // onPrinterDisconnected will handle status update
        } catch (error) {
            console.error("Gagal memutuskan printer:", error);
            updatePrinterConnectionStatus(`Gagal memutuskan: ${error.message}`);
        }
    } else {
        updatePrinterConnectionStatus("Printer tidak terhubung.");
    }
    bluetoothPrinterDevice = null;
    printerCharacteristic = null;
    clearSavedPrinter(); // Clear saved printer on explicit disconnect
}

// Handler for printer disconnection event.
function onPrinterDisconnected(event) {
    const device = event.target;
    console.log(`Printer ${device.name || device.id} telah terputus.`);
    updatePrinterConnectionStatus("Printer terputus.");
    bluetoothPrinterDevice = null;
    printerCharacteristic = null;
    clearSavedPrinter(); // Clear saved printer on unexpected disconnect
}

// Sends a test print.
async function testPrint() {
    if (!bluetoothPrinterDevice || !printerCharacteristic) {
        updatePrinterConnectionStatus("Printer belum terhubung.");
        return;
    }

    updatePrinterConnectionStatus("Mengirim test print...", true);

    try {
        const text = "=== TEST PRINT ===\n" +
                     "Aplikasi Kasir POS\n" +
                     "Tanggal: " + new Date().toLocaleString() + "\n" +
                     "------------------\n" +
                     "Cetak Berhasil!\n\n\n"; // Added extra line breaks for paper cutting

        await sendDataToPrinter(text); // Use the new chunking function

        updatePrinterConnectionStatus("Test print berhasil!", true);
    } catch (error) {
        console.error("Test print error:", error);
        updatePrinterConnectionStatus(`Test print error: ${error.message}`);
    }
}

// Attempts to load and reconnect to a previously saved printer.
async function loadSavedPrinter() {
    const savedPrinterId = localStorage.getItem(LOCAL_STORAGE_PRINTER_ID_KEY);
    if (savedPrinterId) {
        updatePrinterConnectionStatus("Mencoba menghubungkan kembali ke printer terakhir...", false);
        try {
            // Check if navigator.bluetooth and getDevices are available
            if (!navigator.bluetooth || typeof navigator.bluetooth.getDevices !== 'function') {
                console.warn("navigator.bluetooth.getDevices is not supported in this browser/environment. Auto-reconnect will not work.");
                updatePrinterConnectionStatus("Fitur auto-reconnect printer tidak didukung browser ini. Silahkan hubungkan secara manual.");
                clearSavedPrinter(); // Clear saved ID as it won't work for auto-reconnect
                return; // Exit early
            }

            // Reconnect to the known device by its ID
            const devices = await navigator.bluetooth.getDevices();
            const foundDevice = devices.find(d => d.id === savedPrinterId);

            if (foundDevice) {
                bluetoothPrinterDevice = foundDevice;
                bluetoothPrinterDevice.addEventListener('gattserverdisconnected', onPrinterDisconnected);

                const server = await bluetoothPrinterDevice.gatt.connect();
                const service = await server.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb');
                printerCharacteristic = await service.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb');

                updatePrinterConnectionStatus(`Printer terhubung kembali: ${bluetoothPrinterDevice.name || bluetoothPrinterDevice.id}`, true);
            } else {
                updatePrinterConnectionStatus("Printer tersimpan tidak ditemukan. Silahkan hubungkan secara manual.");
                clearSavedPrinter(); // Clear invalid saved ID
            }
        } catch (error) {
            console.error("Gagal menghubungkan kembali ke printer tersimpan:", error);
            updatePrinterConnectionStatus(`Gagal menghubungkan kembali: ${error.message}`);
            bluetoothPrinterDevice = null;
            printerCharacteristic = null;
            clearSavedPrinter(); // Clear saved printer on reconnection failure
        }
    } else {
        updatePrinterConnectionStatus("Silahkan sambungkan printer");
    }
}

// --- Price Calculator Functions (NEW) ---
function openPriceCalculatorModal() {
    priceCalculatorModal.classList.remove('hidden');
    adminMenuDropdown.classList.add('hidden'); // Close admin menu
    // Reset inputs
    priceCalcProductCodeInput.value = '';
    priceCalcProductNameInput.value = '';
    priceCalcModalInput.value = '0';
    priceCalcMarginPercentInput.value = '0';
    priceCalcTaxPercentInput.value = '0';
    priceCalcDiscountPercentInput.value = '0';
    priceCalcSellingPriceInput.value = 'Rp 0';
    priceCalcProfitInput.value = 'Rp 0';
    priceCalcStatusMessage.classList.add('hidden'); // Clear status message
}

function closePriceCalculatorModal() {
    priceCalculatorModal.classList.add('hidden');
    priceCalcStatusMessage.classList.add('hidden'); // Clear status message on close
}

function calculateSellingPriceAndProfit() {
    const modal = parseFloat(priceCalcModalInput.value) || 0;
    const marginPercent = parseFloat(priceCalcMarginPercentInput.value) || 0;
    const taxPercent = parseFloat(priceCalcTaxPercentInput.value) || 0;
    const discountPercent = parseFloat(priceCalcDiscountPercentInput.value) || 0;
    const productCode = priceCalcProductCodeInput.value.trim();

    priceCalcStatusMessage.classList.add('hidden'); // Hide previous messages

    if (isNaN(modal) || modal < 0 || isNaN(marginPercent) || marginPercent < 0 ||
        isNaN(taxPercent) || taxPercent < 0 || isNaN(discountPercent) || discountPercent < 0) {
        displayStatus("Error: Semua input angka harus valid dan tidak negatif.", "error", priceCalcStatusMessage);
        priceCalcSellingPriceInput.value = 'Rp 0';
        priceCalcProfitInput.value = 'Rp 0';
        return;
    }

    // Check for duplicate product code if provided
    if (productCode) {
        const isCodeRegistered = products.some(p => p.id.toLowerCase() === productCode.toLowerCase());
        if (isCodeRegistered) {
            displayStatus(`Peringatan: Kode Barang '${productCode}' sudah terdaftar pada produk yang ada.`, "warning", priceCalcStatusMessage);
        }
    }

    // Calculate Harga Jual
    const sellingPrice = modal * (1 + marginPercent / 100);

    // Calculate Laba based on the user's specific formula: (margin - discount - pajak) * modal
    const marginAmount = modal * (marginPercent / 100);
    const taxAmountOnModal = modal * (taxPercent / 100);
    const discountAmountOnModal = modal * (discountPercent / 100);

    const profit = marginAmount - taxAmountOnModal - discountAmountOnModal;

    priceCalcSellingPriceInput.value = `Rp ${sellingPrice.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    priceCalcProfitInput.value = `Rp ${profit.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// --- QR Scanner Functions (NEW) ---
// Initializes and starts the QR scanner
async function startQrScanner() {
    if (!reader) {
        console.error("Elemen QR Reader tidak ditemukan.");
        displayStatus("Error: Elemen pembaca QR tidak ditemukan.", "error", scannerResult);
        return;
    }

    // Ensure the scanner is stopped before starting again
    await stopQrScanner();

    html5QrCodeScanner = new Html5Qrcode("reader");

    const qrCodeConfig = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCodeScanner.start({ facingMode: "environment" }, qrCodeConfig,
        (decodedText, decodedResult) => {
            // on success callback
            console.log(`QR/Barcode terdeteksi: ${decodedText}`);
            scannerResult.textContent = `Produk terdeteksi: ${decodedText}`;
            handleScannedProduct(decodedText);
            playScanSuccessSound(); // Play sound on successful scan
        },
        (errorMessage) => {
            // on error callback
            // This is constantly called, so only log for debugging purposes if needed
            // console.warn(`QR Scan error: ${errorMessage}`);
        })
    .then(() => {
        displayStatus("Scanner dimulai. Arahkan kamera ke QR/Barcode.", "info", scannerResult);
        startScannerBtn.disabled = true;
        stopScannerBtn.disabled = false; // Changed to false as it's running
    })
    .catch((err) => {
        console.error(`Error memulai QR scanner: ${err}`);
        displayStatus(`Error: Tidak dapat memulai scanner. Pastikan kamera tersedia.`, "error", scannerResult);
        startScannerBtn.disabled = false;
        stopScannerBtn.disabled = true;
    });
}

// Stops the QR scanner
async function stopQrScanner() {
    // Corrected condition: html5QrCodeScanner should not be null, and it should be scanning
    if (html5QrCodeScanner && typeof html5QrCodeScanner.isScanning === "function" && html5QrCodeScanner.isScanning()) {
        try {
            await html5QrCodeScanner.stop();
            displayStatus("Scanner dihentikan.", "info", scannerResult);
            startScannerBtn.disabled = false;
            stopScannerBtn.disabled = true;
        } catch (err) {
            console.error(`Error menghentikan scanner: ${err}`);
            displayStatus(`Error menghentikan scanner: ${err.message}`, "error", scannerResult);
        }
    } else {
        displayStatus("Scanner tidak berjalan.", "info", scannerResult);
        startScannerBtn.disabled = false;
        stopScannerBtn.disabled = true;
    }
}

// Handles the scanned product code
function handleScannedProduct(code) {
    // Make product ID search case-insensitive for robustness
    const product = products.find(p => p.id.toLowerCase() === code.toLowerCase());
    if (product) {
        if (product.stock !== undefined && product.stock <= 0) {
            displayStatus(`Error: Stok ${product.name} habis.`, "error", scannerResult);
            return;
        }
        addProductToTransaction(product.id, product.name, product.price, 1); // Add 1 quantity by default
        displayStatus(`Produk "${product.name}" ditambahkan.`, "success", scannerResult);
        playScanSuccessSound(); // Play sound on successful product addition via scan
    } else {
        displayStatus(`Produk dengan kode "${code}" tidak ditemukan.`, "error", scannerResult);
    }
}

// NEW: Function to populate the product code datalist for suggestions
function renderProductDatalist() {
    if (!productCodeDatalist) return;
    productCodeDatalist.innerHTML = ''; // Clear existing options

    // Filter and add options for product IDs
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        productCodeDatalist.appendChild(option);
    });
}


// --- Event Listeners (Moved inside DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', (event) => {
    // Assign DOM elements once the DOM is ready
    loginScreen = document.getElementById('login-screen');
    mainAppContainer = document.getElementById('main-app-container');

    loginScreenUsernameInput = document.getElementById('login-username-input');
    loginScreenPasswordInput = document.getElementById('login-password-input');
    loginScreenBtn = document.getElementById('login-screen-btn');
    loginScreenMessage = document.getElementById('login-screen-message');


    itemList = document.getElementById('itemList');
    totalAmountInput = document.getElementById('totalAmount');
    discountAmountInput = document.getElementById('discountAmount');
    paymentAmountInput = document.getElementById('paymentAmount');
    paymentMethodSelect = document.getElementById('paymentMethod'); // NEW
    changeAmountHeader = document.getElementById('changeAmountHeader'); // New element
    statusElement = document.getElementById('status');
    newTransactionButton = document.getElementById('newTransaction');
    printReceiptButton = document.getElementById('printReceipt');
    processOnlyPaymentButton = document.getElementById('processOnlyPayment');
    noItemsMessage = document.getElementById('noItemsMessage');
    headerDateTime = document.getElementById('headerDateTime');
    headerDailyRevenue = document.getElementById('headerDailyRevenue');
    headerDailyRevenueAmountContainer = document.getElementById('headerDailyRevenueAmountContainer');
    toggleDailyRevenueVisibilityButton = document.getElementById('toggleDailyRevenueVisibility');
    eyeIcon = document.getElementById('eyeIcon');
    eyeSlashIcon = document.getElementById('eyeSlashIcon');
    cashierDisplay = document.getElementById('cashierDisplay');
    cashierRole = document.getElementById('cashierRole');
    logoutButton = document.getElementById('logoutButton');
    darkModeToggle = document.getElementById('darkModeToggle'); // Get dark mode toggle button

    // Monthly Financial Bar elements
    monthlyFinancialBarContainer = document.getElementById('monthly-financial-bar-container');
    monthlyProfitBar = document.getElementById('monthly-profit-bar');
    monthlyExpenseBar = document.getElementById('monthly-expense-bar');


    // Registered product input elements
    productCodeInput = document.getElementById('product-code');
    productNameInput = document.getElementById('product-name');
    priceInput = document.getElementById('price');
    quantityInput = document.getElementById('quantity');
    addRegisteredItemButton = document.getElementById('add-to-cart-btn-registered');
    searchProductByCodeBtn = document.getElementById('searchProductByCodeBtn'); // NEW: Search product by code button
    productCodeDatalist = document.getElementById('product-code-datalist'); // NEW: Get datalist element

    // Custom product input elements
    customProductCodeInput = document.getElementById('custom-product-code');
    customProductNameInput = document.getElementById('custom-product-name');
    customProductPriceInput = document.getElementById('custom-price');
    customProductQtyInput = document.getElementById('custom-quantity');
    addCustomItemButton = document.getElementById('add-to-cart-btn-custom');

    // NEW: Online Shop input elements
    onlineShopSection = document.getElementById('onlineShopSection');
    showOnlineShopProductsButton = document.getElementById('showOnlineShopProducts');
    marketplaceNameSelect = document.getElementById('marketplace-name');
    otherMarketplaceNameContainer = document.getElementById('other-marketplace-name-container');
    otherMarketplaceNameInput = document.getElementById('other-marketplace-name');
    resiNumberInput = document.getElementById('resi-number');
    onlineShopPriceInput = document.getElementById('online-shop-price');
    onlineShopQuantityInput = document.getElementById('online-shop-quantity');
    addToCartBtnOnlineShop = document.getElementById('add-to-cart-btn-online-shop');


    showRegisteredProductsButton = document.getElementById('showRegisteredProducts');
    showCustomProductsButton = document.getElementById('showCustomProducts');
    showScannerProductsButton = document.getElementById('showScannerProducts'); // NEW
    customProductSection = document.getElementById('customProductSection');
    registeredProductSection = document.getElementById('registeredProductSection');
    scannerSection = document.getElementById('scannerSection'); // NEW
    reader = document.getElementById('reader'); // NEW
    scannerResult = document.getElementById('scanner-result'); // NEW
    startScannerBtn = document.getElementById('startScannerBtn'); // NEW
    stopScannerBtn = document.getElementById('stopScannerBtn'); // NEW

    // Admin menu elements
    adminMenuButton = document.getElementById('adminMenuButton');
    adminMenuDropdown = document.getElementById('admin-menu-dropdown');
    openStoreProductsModalBtn = document.getElementById('open-store-products-modal-btn');
    openAddProductModalBtn = document.getElementById('open-add-product-modal-btn');
    openFinancialReportModalBtn = document.getElementById('open-financial-report-modal-btn');
    openExpensesModalBtn = document.getElementById('open-expenses-modal-btn');
    openUserSettingsModalBtn = document.getElementById('open-user-settings-modal-btn');
    openPriceCalculatorModalBtn = document.getElementById('open-price-calculator-modal-btn'); // NEW
    exportProductsBtn = document.getElementById('export-products-btn');
    importProductsFileInput = document.getElementById('import-products-file-input');
    importProductsBtn = document.getElementById('import-products-btn');
    exportDataBtn = document.getElementById('export-data-btn');
    importFileInput = document.getElementById('import-file-input');
    importDataBtn = document.getElementById('import-data-btn');
    resetAllDataBtn = document.getElementById('reset-all-data-btn');

    // Store Products Modal elements
    storeProductsModal = document.getElementById('store-products-modal');
    closeStoreProductsModalBtn = document.getElementById('close-store-products-modal');
    storeProductsTableBody = document.getElementById('store-products-table-body');
    searchStoreProductsInput = document.getElementById('search-store-products-input');
    storeProductsTableContainer = document.getElementById('store-products-table-container');
    editProductForm = document.getElementById('edit-product-form');
    editProductIdInput = document.getElementById('edit-product-id-input');
    editProductNameInput = document.getElementById('edit-product-name-input');
    editProductCostInput = document.getElementById('edit-product-cost-input');
    editProductPriceInput = document.getElementById('edit-product-price-input');
    editProductStockInput = document.getElementById('edit-product-stock-input');
    saveProductEditBtn = document.getElementById('save-product-edit-btn');
    cancelProductEditBtn = document.getElementById('cancel-product-edit-btn');

    // Add Product Modal elements
    addProductModal = document.getElementById('add-product-modal');
    closeAddProductModalBtn = document.getElementById('close-add-product-modal');
    addProductCodeInput = document.getElementById('add-product-code');
    addProductNameInput = document.getElementById('add-product-name');
    addProductCostInput = document.getElementById('add-product-cost');
    addProductPriceInput = document.getElementById('add-product-price');
    addProductProfitInput = document.getElementById('add-product-profit');
    addProductStockInput = document.getElementById('add-product-stock');
    saveNewProductBtn = document.getElementById('save-new-product-btn');
    cancelAddProductBtn = document.getElementById('cancel-add-product-btn');

    // Expenses Modal elements
    expensesModal = document.getElementById('expenses-modal');
    closeExpensesModalBtn = document.getElementById('close-expenses-modal');
    expenseDateInput = document.getElementById('expense-date');
    expenseDescriptionInput = document.getElementById('expense-description');
    expenseAmountInput = document.getElementById('expense-amount');
    addExpenseBtn = document.getElementById('add-expense-btn');
    expensesListBody = document.getElementById('expenses-list-body');
    emptyExpensesMessage = document.getElementById('empty-expenses-message');
    expenseStatusMessage = document.getElementById('expense-status-message');
    expenseSearchInput = document.getElementById('expense-search-input');
    expenseFilterStartDate = document.getElementById('expense-filter-start-date');
    expenseFilterEndDate = document.getElementById('expense-filter-end-date');
    applyExpenseFilterBtn = document.getElementById('apply-expense-filter-btn');
    clearExpenseFilterBtn = document.getElementById('clear-expense-filter-btn');
    exportExpensesXLSBtn = document.getElementById('export-expenses-xls-btn'); // NEW: Get the export button
    totalExpensesDisplayModal = document.getElementById('total-expenses-display-modal');


    // Financial Report Modal elements
    financialReportModal = document.getElementById('financial-report-modal');
    closeFinancialReportModalBtn = document.getElementById('close-financial-report-modal-btn');
    reportStartDateInput = document.getElementById('report-start-date');
    reportEndDateInput = document.getElementById('report-end-date');
    applyFinancialFilterBtn = document.getElementById('apply-financial-filter-btn');
    clearFinancialFilterBtn = document.getElementById('clear-financial-filter-btn');
    exportFinancialReportXLSBtn = document.getElementById('export-financial-report-xls-btn');
    totalRevenueDisplay = document.getElementById('total-revenue-display');
    totalExpensesDisplay = document.getElementById('total-expenses-display');
    grossProfitDisplay = document.getElementById('gross-profit-display');
    netProfitDisplay = document.getElementById('net-profit-display');
    financialChartCanvas = document.getElementById('financial-chart');
    financialReportMessageBox = document.getElementById('financial-report-message-box');

    // Transaction History Modal elements
    openTransactionHistoryBtn = document.getElementById('open-transaction-history-btn');
    transactionHistoryModal = document.getElementById('transaction-history-modal');
    closeTransactionHistoryModalBtn = document.getElementById('close-transaction-history-modal');
    transactionHistoryTableBody = document.getElementById('transaction-history-table-body');
    historyStartDateInput = document.getElementById('history-start-date');
    historyEndDateInput = document.getElementById('history-end-date');
    applyHistoryFilterBtn = document.getElementById('apply-history-filter-btn');
    clearHistoryFilterBtn = document.getElementById('clear-history-filter-btn');
    transactionHistoryMessageBox = document.getElementById('transaction-history-message-box');
    transactionDetailSection = document.getElementById('transaction-detail-section');
    detailTransactionId = document.getElementById('detail-transaction-id');
    detailTransactionDate = document.getElementById('detail-transaction-date');
    detailCashier = document.getElementById('detail-cashier');
    detailSubtotal = document.getElementById('detail-subtotal');
    detailDiscount = document.getElementById('detail-discount');
    detailTotalAmount = document.getElementById('detail-total-amount');
    detailPaymentAmount = document.getElementById('detail-payment-amount');
    detailChangeAmount = document.getElementById('detail-change-amount');
    detailItemList = document.getElementById('detail-item-list');
    closeTransactionDetailBtn = document.getElementById('close-transaction-detail-btn');
    reprintReceiptBtn = document.getElementById('reprint-receipt-btn'); // New: Reprint receipt button in detail section
    historyFilterControls = document.getElementById('history-filter-controls');
    totalTransactionsAmount = document.getElementById('total-transactions-amount');

    // Confirmation Modal elements
    confirmationModal = document.getElementById('confirmation-modal');
    confirmationMessage = document.getElementById('confirmation-message');
    confirmOkBtn = document.getElementById('confirm-ok-btn');
    confirmCancelBtn = document.getElementById('confirm-cancel-btn');

    // User Settings Modal (New)
    userSettingsModal = document.getElementById('user-settings-modal');
    closeUserSettingsModalBtn = document.getElementById('close-user-settings-modal');
    userSettingsLoginSection = document.getElementById('user-settings-login-section');
    userSettingsLoginUsernameInput = document.getElementById('user-settings-login-username');
    userSettingsLoginPasswordInput = document.getElementById('user-settings-login-password');
    userSettingsLoginButton = document.getElementById('user-settings-login-btn');
    userSettingsLoginStatusMessage = document.getElementById('user-settings-login-status-message');
    userManagementSection = document.getElementById('user-management-section');
    newUserNameInput = document.getElementById('new-user-username');
    newUserPasswordInput = document.getElementById('new-user-password');
    newUserRoleSelect = document.getElementById('new-user-role');
    addUserButton = document.getElementById('add-user-btn');
    addUserStatusMessage = document.getElementById('add-user-status-message');
    userListBody = document.getElementById('user-list-body');
    emptyUserMessage = document.getElementById('empty-user-message');

    // Printer Settings Modal (New)
    openPrinterSettingsBtn = document.getElementById('open-printer-settings-btn');
    printerSettingsModal = document.getElementById('printer-settings-modal');
    closePrinterSettingsModalBtn = document.getElementById('close-printer-settings-modal');
    printerStatus = document.getElementById('printer-status');
    connectPrinterBtn = document.getElementById('connect-printer-btn');
    disconnectPrinterBtn = document.getElementById('disconnect-printer-btn');
    testPrintBtn = document.getElementById('test-print-btn');

    // Price Calculator Modal (NEW)
    priceCalculatorModal = document.getElementById('price-calculator-modal');
    closePriceCalculatorModalBtn = document.getElementById('close-price-calculator-modal');
    priceCalcProductCodeInput = document.getElementById('price-calc-product-code');
    copyProductCodeBtn = document.getElementById('copy-product-code-btn');
    priceCalcProductNameInput = document.getElementById('price-calc-product-name');
    priceCalcModalInput = document.getElementById('price-calc-modal');
    priceCalcMarginPercentInput = document.getElementById('price-calc-margin-percent');
    priceCalcTaxPercentInput = document.getElementById('price-calc-tax-percent');
    priceCalcDiscountPercentInput = document.getElementById('price-calc-discount-percent');
    calculatePriceBtn = document.getElementById('calculate-price-btn');
    priceCalcSellingPriceInput = document.getElementById('price-calc-selling-price');
    copySellingPriceBtn = document.getElementById('copy-selling-price-btn');
    priceCalcProfitInput = document.getElementById('price-calc-profit');
    priceCalcStatusMessage = document.getElementById('price-calc-status-message');

    // Nominal Quick Pay Buttons (NEW)
    nominalButtonsContainer = document.getElementById('nominal-buttons-container');
    nominalButtons = document.querySelectorAll('.nominal-btn');

    // New: Audio elements
    scanSuccessSound = document.getElementById('scanSuccessSound'); // Assign the new audio element
    transactionSuccessSound = document.getElementById('transactionSuccessSound'); // Assign the updated audio element

    // New: Reset data modal elements
    resetDataModal = document.getElementById('reset-data-modal');
    resetPasswordInput = document.getElementById('reset-password-input');
    resetDataConfirmBtn = document.getElementById('reset-data-confirm-btn');
    resetDataCancelBtn = document.getElementById('reset-data-cancel-btn');
    resetDataMessage = document.getElementById('reset-data-message');

    // NEW: Daily Report Print Modal Elements
    openDailyReportPrintModalBtn = document.getElementById('open-daily-report-print-modal-btn');
    dailyReportPrintModal = document.getElementById('daily-report-print-modal');
    closeDailyReportPrintModalBtn = document.getElementById('close-daily-report-print-modal');
    reportPrintDateInput = document.getElementById('report-print-date');
    dailyReportPrintStatusMessage = document.getElementById('daily-report-print-status-message');
    printDailyReportBtn = document.getElementById('print-daily-report-btn');


    // --- Chart.js library (for financial chart placeholder) ---
    // It's good practice to load external libraries after your DOM is ready
    const chartJsScript = document.createElement('script');
    chartJsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    chartJsScript.onload = () => {
        // Initialise chart when Chart.js is loaded
        renderFinancialReportChart([]);
    };
    document.head.appendChild(chartJsScript);

    // --- Load Data from Local Storage on App Start ---
    loadProducts(); // This will now also call renderProductDatalist()
    loadTransactionHistory();
    loadExpenses();
    loadUsers(); // New: Load users on app start (loggedInUser now from sessionStorage)
    loadDailyRevenue();
    loadRevenueVisibility();
    loadDarkModeState(); // Load dark mode state
    loadMonthlyFinancialData(); // New: Load monthly financial data
    loadSavedPrinter(); // New: Attempt to load and reconnect to saved printer

    applyDarkMode(); // Apply dark mode based on loaded state
    checkAndResetDailyRevenue(); // This will now also reset monthly data if month changed
    renderMonthlyFinancialBar(); // Initial render of the monthly bar

    // Initial check for logged-in user to show the correct screen
    if (loggedInUser) {
        loginScreen.classList.add('hidden');
        mainAppContainer.classList.remove('hidden');
        startNewTransaction(); // Start a new transaction after successful auto-login
    } else {
        loginScreen.classList.remove('hidden');
        mainAppContainer.classList.add('hidden');
    }


    // Variabel untuk debounce
    let productCodeInputTimeout;
    const DEBOUNCE_DELAY = 100; // Milidetik, sesuaikan jika perlu (misal 50-200ms)

    // Event listener for product code input (registered products)
    if (productCodeInput) {
        productCodeInput.addEventListener('input', function() {
            clearTimeout(productCodeInputTimeout); // Hapus timeout sebelumnya jika ada
            const currentInputCode = this.value.trim(); // Ambil nilai saat ini

            // Jika input kosong, langsung kosongkan kolom lain dan status
            if (currentInputCode === '') {
                productNameInput.value = '';
                priceInput.value = '0';
                displayStatus("", "");
                return; // Berhenti di sini
            }

            // Set timeout baru
            productCodeInputTimeout = setTimeout(() => {
                const codeToProcess = productCodeInput.value.trim(); // Ambil nilai lagi setelah jeda
                const foundProduct = products.find(p => p.id.toLowerCase() === codeToProcess.toLowerCase());

                if (foundProduct) {
                    if (foundProduct.stock !== undefined && foundProduct.stock <= 0) {
                        displayStatus(`Error: Stok ${foundProduct.name} habis. Tidak bisa menjual produk ini.`, "error");
                        // Jangan kosongkan input, biarkan user melihat kode yang discan
                        return;
                    }
                    let qty = parseInt(quantityInput.value);
                    if (isNaN(qty) || qty <= 0) qty = 1;

                    // Cek stok sebelum menambahkan ke keranjang
                    const currentQtyInCart = currentTransactionItems.find(item => item.productId === foundProduct.id)?.qty || 0;
                    if (foundProduct.stock !== undefined && (currentQtyInCart + qty) > foundProduct.stock) {
                        displayStatus(`Error: Stok ${foundProduct.name} tidak cukup. Stok tersedia: ${foundProduct.stock}`, "error");
                        // Jangan kosongkan input, biarkan user melihat kode yang discan
                        return;
                    }

                    // Panggil fungsi addProductToTransaction (ini akan otomatis mengosongkan dan fokus kembali)
                    addProductToTransaction(foundProduct.id, foundProduct.name, foundProduct.price, qty);
                    displayStatus(`Produk "${foundProduct}" ditambahkan.`, "success"); // Tampilkan sukses setelah menambah
                } else {
                    productNameInput.value = '';
                    priceInput.value = '0';
                    displayStatus(`Error: Produk dengan kode "${codeToProcess}" tidak ditemukan.`, "error");
                    // Jangan kosongkan input, biarkan user memperbaiki kode
                }
            }, DEBOUNCE_DELAY);
        });

        // Event listener keydown 'Enter' yang sebelumnya ada di sini DIHAPUS.
        // Karena logika auto-add sekarang dihandle oleh event 'input' dengan debounce.
    }

    // NEW: Event listener for product name input (registered products)
    if (productNameInput) {
        productNameInput.addEventListener('input', function() {
            searchProductAndPopulateByName(); // Call the new function to search by name and populate
        });
    }

    // NEW: Event listener for the search button next to product code input (now less crucial due to auto-add, but can remain)
    if (searchProductByCodeBtn) {
        searchProductByCodeBtn.addEventListener('click', () => {
            const code = productCodeInput.value.trim();
            const foundProduct = products.find(p => p.id.toLowerCase() === code.toLowerCase());
            if (foundProduct) {
                if (foundProduct.stock !== undefined && foundProduct.stock <= 0) {
                    displayStatus(`Error: Stok ${foundProduct.name} habis. Tidak bisa menjual produk ini.`, "error");
                    return;
                }
                let qty = parseInt(quantityInput.value);
                if (isNaN(qty) || qty <= 0) qty = 1;

                const currentQtyInCart = currentTransactionItems.find(item => item.productId === foundProduct.id)?.qty || 0;
                if (foundProduct.stock !== undefined && (currentQtyInCart + qty) > foundProduct.stock) {
                    displayStatus(`Error: Stok ${foundProduct.name} tidak cukup. Stok tersedia: ${foundProduct.stock}`, "error");
                    return;
                }
                addProductToTransaction(foundProduct.id, foundProduct.name, foundProduct.price, qty);
                displayStatus(`Produk "${foundProduct.name}" ditambahkan.`, "success");
            } else {
                displayStatus(`Produk dengan kode "${code}" tidak ditemukan.`, "error");
            }
        });
    }


    // Function to search for product by code and populate fields (used by input and button)
    // This function is now mostly integrated into the productCodeInput 'input' listener
    // Keeping it here for clarity if other parts of the code still call it directly,
    // but its role for auto-populating is now managed by the direct event listener.
    function searchProductAndPopulate() {
        const code = productCodeInput.value.trim();
        const foundProduct = products.find(p => p.id.toLowerCase() === code.toLowerCase());

        if (foundProduct) {
            productNameInput.value = foundProduct.name;
            priceInput.value = foundProduct.price.toLocaleString('id-ID');
            // Do NOT auto-add here. Auto-add is handled by the 'input' listener's direct logic.
            // Focus on quantity only if the product name input is not currently being used for search by name
            if (document.activeElement !== productNameInput) {
                quantityInput.focus(); // Focus on quantity for quick input
            }
        } else {
            // Only clear if product code doesn't start with any known product ID.
            const anyProductMatchesPrefix = products.some(p => p.id.toLowerCase().startsWith(code.toLowerCase()));
            if (!anyProductMatchesPrefix && code !== '') {
                productNameInput.value = '';
                priceInput.value = '0';
            }
            // Do not display "not found" status here, as user might still be typing
            // This feedback is better handled by the auto-add logic once a full code is attempted
        }
    }

    // NEW: Function to search for product by name and populate fields
    function searchProductAndPopulateByName() {
        const name = productNameInput.value.trim();
        // Make product name search case-insensitive for robustness
        const foundProduct = products.find(p => p.name.toLowerCase().includes(name.toLowerCase()));

        if (foundProduct) {
            // Only populate code and price if the name input is long enough to suggest a unique match
            // or if it's an exact match. This prevents flickering while typing.
            // Or simply, always populate and let user adjust. For simplicity, we'll populate if found.
            productCodeInput.value = foundProduct.id;
            priceInput.value = foundProduct.price.toLocaleString('id-ID');
            displayStatus(`Produk "${foundProduct.name}" ditemukan.`, "info"); // Info, not error
            // Focus on quantity after finding by name
            quantityInput.focus();
        } else {
            // Clear code and price if no match or partial match for name
            productCodeInput.value = '';
            priceInput.value = '0';
            displayStatus("", ""); // Clear status
        }
    }


    // Event listener for add registered item button (now less critical due to auto-add)
    // Keeping it for manual override if desired, but removed the explicit "add" functionality
    // from it if the auto-add on input is successful.
    if (addRegisteredItemButton) {
        addRegisteredItemButton.addEventListener('click', function() {
            const id = productCodeInput.value.trim();
            const name = productNameInput.value.trim();
            const price = parseFloat(priceInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0;
            let qty = parseInt(quantityInput.value);
            if (isNaN(qty) || qty <= 0) qty = 1; // Default to 1 if invalid

            const product = products.find(p => p.id === id);

            if (!id || !name || price <= 0) {
                displayStatus("Error: Pastikan Kode Produk terisi, Nama Produk & Harga muncul untuk Produk Terdaftar.", "error");
                return;
            }
            if (isNaN(qty) || qty <= 0) {
                displayStatus("Error: Jumlah valid diperlukan untuk Produk Terdaftar.", "error");
                return;
            }

            // Added explicit check for 0 stock
            if (product && product.stock !== undefined && product.stock <= 0) {
                displayStatus(`Error: Stok ${product.name} habis. Tidak bisa menjual produk ini.`, "error");
                return;
            }

            // Check stock for all products
            if (product && product.stock !== undefined && product.stock < qty) {
                displayStatus(`Error: Stok ${product.name} tidak cukup. Stok tersedia: ${product.stock}`, "error");
                return;
            }

            addProductToTransaction(id, name, price, qty);
            // Clear inputs after adding
            productCodeInput.value = '';
            productNameInput.value = '';
            priceInput.value = '0';
            quantityInput.value = '1';
            displayStatus("", ""); // Clear previous status
        });
    }

    // Event listener for input changes in quantity and payment amount
    document.addEventListener('input', function(e) {
        // Check if the input is an item quantity field within the transaction list
        if (e.target.classList.contains('item-qty-input')) {
            const index = e.target.dataset.itemIndex;
            const oldQty = currentTransactionItems[index].qty;
            let newQty = parseInt(e.target.value);

            if (isNaN(newQty) || newQty < 0) {
                newQty = 0; // Treat invalid or negative as 0 for consistency
                e.target.value = 0; // Update input field to 0
            }

            const itemProductId = currentTransactionItems[index].productId;
            // Only adjust stock for registered products in terms of validation
            if (!itemProductId.startsWith('custom-') && !currentTransactionItems[index].isOnlineShop) {
                const product = products.find(p => p.id === itemProductId);
                if (product && product.stock !== undefined) {
                    const quantityDifference = newQty - oldQty;

                    // If increasing quantity, check if enough stock
                    if (quantityDifference > 0 && product.stock < (currentTransactionItems[index].qty + quantityDifference)) {
                        displayStatus(`Error: Stok ${product.name} tidak cukup. Stok tersedia: ${product.stock}`, "error");
                        e.target.value = oldQty; // Revert quantity input
                        return;
                    }
                    // No direct modification to product.stock here, only validation.
                    // Stock is decremented only upon transaction commit.
                }
            }

            currentTransactionItems[index].qty = newQty;

            // Remove item if quantity becomes 0
            if (newQty === 0) {
                currentTransactionItems.splice(index, 1);
            }
            renderTransactionItems(); // Re-render to update total
        }

        // Check if the payment amount input changed
        if (e.target.id === 'paymentAmount') {
            calculateChange(); // Recalculate change
        }

        // New: Check if the discount amount input changed
        if (e.target.id === 'discountAmount') {
            renderTransactionItems(); // Re-render to update total based on new discount
        }
    });

    // Event listener for remove item buttons (delegated to document)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('removeItem')) {
            const index = e.target.dataset.itemIndex;
            currentTransactionItems.splice(index, 1); // Remove item from array
            renderTransactionItems(); // Re-render the list
        }
    });

    // Event listener for "New Transaction" button
    if (newTransactionButton) newTransactionButton.addEventListener('click', startNewTransaction);

    // Event listeners for section toggling
    if (showRegisteredProductsButton) showRegisteredProductsButton.addEventListener('click', () => showSection('registered'));
    if (showCustomProductsButton) showCustomProductsButton.addEventListener('click', () => showSection('custom'));
    if (showOnlineShopProductsButton) showOnlineShopProductsButton.addEventListener('click', () => showSection('online-shop')); // NEW Online Shop button event
    if (showScannerProductsButton) showScannerProductsButton.addEventListener('click', () => showSection('scanner')); // NEW Scanner button event

    // Event listener for "Add Custom Item" button
    if (addCustomItemButton) addCustomItemButton.addEventListener('click', function() {
        const name = customProductNameInput.value.trim();
        const price = parseFloat(customProductPriceInput.value);
        let qty = parseInt(customProductQtyInput.value);
        const code = customProductCodeInput.value.trim();

         if (!name) {
            displayStatus("Error: Nama produk kustom wajib diisi!", "error");
            return;
        }
        if (isNaN(price) || price < 0) {
            displayStatus("Error: Harga jual kustom tidak valid!", "error");
            return;
        }
        if (isNaN(qty) || qty <= 0) {
            displayStatus("Error: Jumlah produk kustom tidak valid!", "error");
            return;
        }

        // Validate custom product code (if provided) against registered product IDs
        if (code) {
            const isCodeRegistered = products.some(p => p.id.toLowerCase() === code.toLowerCase());
            if (isCodeRegistered) {
                displayStatus("Error: Kode produk kustom tidak boleh sama dengan kode produk terdaftar.", "error");
                return;
            }
        }

        addProductToTransaction(code || 'custom', name, price, qty, true); // Pass true for isCustom
        // Clear custom product inputs after adding
        if (customProductCodeInput) customProductCodeInput.value = '';
        if (customProductNameInput) customProductNameInput.value = '';
        if (customProductPriceInput) customProductPriceInput.value = '0';
        if (customProductQtyInput) customProductQtyInput.value = '1';
        displayStatus("", ""); // Clear previous status
    });

    // NEW: Event listener for "Add to Cart" button for Online Shop
    if (addToCartBtnOnlineShop) {
        addToCartBtnOnlineShop.addEventListener('click', function() {
            let marketplace = marketplaceNameSelect.value;
            const resi = resiNumberInput.value.trim();
            const price = parseFloat(onlineShopPriceInput.value);
            let qty = parseInt(onlineShopQuantityInput.value);

            if (marketplace === 'Other') {
                marketplace = otherMarketplaceNameInput.value.trim();
            }

            if (!marketplace || !resi || isNaN(price) || price <= 0 || isNaN(qty) || qty <= 0) {
                displayStatus("Error: Pastikan semua kolom Online Shop terisi dengan benar!", "error");
                return;
            }

            // Add online shop item to transaction
            // For online shop, product ID can be a combination of marketplace and resi for uniqueness, or just a generic 'online' type
            addProductToTransaction(`online-${marketplace}-${resi}`, `Produk Online (${marketplace})`, price, qty, false, true, marketplace, resi);

            // Clear online shop inputs after adding
            marketplaceNameSelect.value = '';
            otherMarketplaceNameInput.value = '';
            otherMarketplaceNameContainer.style.display = 'none';
            resiNumberInput.value = '';
            onlineShopPriceInput.value = '0';
            onlineShopQuantityInput.value = '1';
            displayStatus("", ""); // Clear previous status
        });
    }

    // NEW: Event listener for marketplace dropdown to show/hide "Lainnya" input
    if (marketplaceNameSelect) {
        marketplaceNameSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherMarketplaceNameContainer.style.display = 'block';
                otherMarketplaceNameInput.focus();
            } else {
                otherMarketplaceNameContainer.style.display = 'none';
                otherMarketplaceNameInput.value = ''; // Clear input when hidden
            }
        });
    }


    // Event listener for "Cetak Struk" button (now calls processAndPrintTransaction)
    if (printReceiptButton) printReceiptButton.addEventListener('click', processAndPrintTransaction);

    // Event listener for new "Proses Pembayaran" button
    if (processOnlyPaymentButton) {
        processOnlyPaymentButton.addEventListener('click', function() {
            const transactionRecord = createTransactionObjectAndDecrementStock(); // Validate and decrement stock
            if (transactionRecord) {
                commitTransactionData(transactionRecord); // Commit if valid
            }
        });
    }

    // --- Admin Menu Dropdown Toggle ---
    if (adminMenuButton) {
        adminMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (adminMenuDropdown) {
                adminMenuDropdown.classList.toggle('hidden');
            } else {
                console.error('Admin menu dropdown element is null inside click handler!');
            }
        });

        // Close dropdown if clicked outside
        document.addEventListener('click', (e) => {
            if (adminMenuDropdown && !adminMenuDropdown.contains(e.target) && !adminMenuButton.contains(e.target)) {
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }

    // --- Store Products Modal Event Listeners ---
    if (openStoreProductsModalBtn) {
        openStoreProductsModalBtn.addEventListener('click', () => {
            // Check if admin is logged in before opening
            if (loggedInUser && loggedInUser.role === 'admin') {
                storeProductsModal.classList.remove('hidden');
                renderStoreProducts();
                adminMenuDropdown.classList.add('hidden');
            } else {
                displayStatus("Akses Ditolak: Anda harus login sebagai Admin untuk melihat Produk Toko.", "error");
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }
    if (closeStoreProductsModalBtn) {
        closeStoreProductsModalBtn.addEventListener('click', closeStoreProductsModal);
    }
    // Delegation for edit and delete buttons within the table
    if (storeProductsTableBody) {
        storeProductsTableBody.addEventListener('click', (e) => {
            if (e.target.closest('.edit-product-btn')) {
                const productId = e.target.closest('.edit-product-btn').dataset.productId;
                editProduct(productId);
            } else if (e.target.closest('.delete-product-btn')) {
                const productId = e.target.closest('.delete-product-btn').dataset.productId;
                deleteProduct(productId);
            }
        });
    }
    // Event listener for search input in Store Products Modal
    if (searchStoreProductsInput) {
        searchStoreProductsInput.addEventListener('input', (e) => {
            renderStoreProducts(e.target.value);
        });
    }

    // --- Save Product Edit button event listener ---
    if (saveProductEditBtn) {
        saveProductEditBtn.addEventListener('click', saveProductEdit);
    }

    // --- Cancel Product Edit button event listener ---
    if (cancelProductEditBtn) {
        cancelProductEditBtn.addEventListener('click', () => {
            editProductForm.classList.add('hidden'); // Hide the form
            storeProductsTableContainer.classList.remove('hidden'); // Show the product list
            searchStoreProductsInput.classList.remove('hidden'); // Show search input
            displayStatus("", ""); // Clear status message
        });
    }


    // --- Add New Product Modal Event Listeners ---
    if (openAddProductModalBtn) {
        openAddProductModalBtn.addEventListener('click', () => {
            // Check if admin is logged in before opening
            if (loggedInUser && loggedInUser.role === 'admin') {
                addProductModal.classList.remove('hidden');
                adminMenuDropdown.classList.add('hidden');
                calculateProfit();
            } else {
                displayStatus("Akses Ditolak: Anda harus login sebagai Admin untuk menambah Produk Baru.", "error");
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }
    if (closeAddProductModalBtn) {
        closeAddProductModalBtn.addEventListener('click', closeAddProductModal);
    }
    if (addProductCostInput) {
        addProductCostInput.addEventListener('input', calculateProfit);
    }
    if (addProductPriceInput) {
        addProductPriceInput.addEventListener('input', calculateProfit);
    }
    if (saveNewProductBtn) {
        saveNewProductBtn.addEventListener('click', addNewProduct);
    }
    if (cancelAddProductBtn) {
        cancelAddProductBtn.addEventListener('click', closeAddProductModal);
    }

    // --- Expenses Modal Event Listeners (New) ---
    if (openExpensesModalBtn) {
        openExpensesModalBtn.addEventListener('click', () => {
             // Check if admin is logged in before opening
             if (loggedInUser && loggedInUser.role === 'admin') {
                expensesModal.classList.remove('hidden');
                adminMenuDropdown.classList.add('hidden');
                expenseDateInput.value = new Date().toISOString().slice(0, 10); // Set default date to today
                expenseSearchInput.value = ''; // Clear search input
                expenseFilterStartDate.value = ''; // Clear date filters
                expenseFilterEndDate.value = ''; // Clear date filters
                renderExpenses(); // Render expenses when opening modal
            } else {
                displayStatus("Akses Ditolak: Anda harus login sebagai Admin untuk melihat Pengeluaran.", "error");
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }
    if (closeExpensesModalBtn) {
        closeExpensesModalBtn.addEventListener('click', closeExpensesModal);
    }
    if (addExpenseBtn) {
        addExpenseBtn.addEventListener('click', addExpense);
    }
    // Delegate expense deletion
    if (expensesListBody) {
        expensesListBody.addEventListener('click', (e) => {
            if (e.target.closest('.delete-expense-btn')) {
                const expenseId = e.target.closest('.delete-expense-btn').dataset.expenseId;
                deleteExpense(expenseId);
            }
        });
    }
    // New: Event listeners for expense search and filter
    if (expenseSearchInput) {
        expenseSearchInput.addEventListener('input', renderExpenses);
    }
    if (applyExpenseFilterBtn) {
        applyExpenseFilterBtn.addEventListener('click', renderExpenses);
    }
    if (clearExpenseFilterBtn) {
        clearExpenseFilterBtn.addEventListener('click', () => {
            expenseFilterStartDate.value = '';
            expenseFilterEndDate.value = '';
            renderExpenses(); // Re-render with cleared date filters
        });
    }
    // NEW: Event listener for Export Expenses to XLS button
    if (exportExpensesXLSBtn) {
        exportExpensesXLSBtn.addEventListener('click', exportExpensesToXLS);
    }


    // --- Financial Report Modal Event Listeners ---
    if (openFinancialReportModalBtn) {
        openFinancialReportModalBtn.addEventListener('click', () => {
            // Check if admin is logged in before opening
            if (loggedInUser && loggedInUser.role === 'admin') {
                financialReportModal.classList.remove('hidden');
                adminMenuDropdown.classList.add('hidden');
                calculateFinancialReport();
            } else {
                displayStatus("Akses Ditolak: Anda harus login sebagai Admin untuk melihat Laporan Keuangan.", "error");
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }
    if (closeFinancialReportModalBtn) {
        closeFinancialReportModalBtn.addEventListener('click', () => {
            financialReportModal.classList.add('hidden');
            if (financialReportMessageBox) {
                financialReportMessageBox.classList.add('hidden');
                financialReportMessageBox.textContent = '';
            }
            displayStatus("", ""); // Clear main status message
        });
    }
    if (applyFinancialFilterBtn) {
        applyFinancialFilterBtn.addEventListener('click', calculateFinancialReport);
    }
    if (clearFinancialFilterBtn) {
        clearFinancialFilterBtn.addEventListener('click', () => {
            reportStartDateInput.value = '';
            reportEndDateInput.value = '';
            calculateFinancialReport(); // Re-run with empty filters
        });
    }
    // NEW: Event listener for Export to XLS button (Financial Report)
    if (exportFinancialReportXLSBtn) {
        exportFinancialReportXLSBtn.addEventListener('click', exportFinancialReportToXLS);
    }


    // --- Transaction History Functions ---
    if (openTransactionHistoryBtn) {
        openTransactionHistoryBtn.addEventListener('click', () => {
            transactionHistoryModal.classList.remove('hidden');
            transactionDetailSection.classList.add('hidden');
            if (transactionHistoryTableBody && transactionHistoryTableBody.parentElement) {
                transactionHistoryTableBody.parentElement.classList.remove('hidden');
            }
            if (historyFilterControls) {
                historyFilterControls.classList.remove('hidden');
            }
            totalTransactionsAmount.parentElement.classList.remove('hidden'); // Show total transactions amount
            historyStartDateInput.value = '';
            historyEndDateInput.value = '';
            renderTransactionHistory();
        });
    }
    if (closeTransactionHistoryModalBtn) {
        closeTransactionHistoryModalBtn.addEventListener('click', () => {
            transactionHistoryModal.classList.add('hidden');
            displayStatus("", "");
        });
    }
    if (applyHistoryFilterBtn) {
        applyHistoryFilterBtn.addEventListener('click', () => {
            renderTransactionHistory(historyStartDateInput.value, historyEndDateInput.value);
        });
    }
    if (clearHistoryFilterBtn) {
        clearHistoryFilterBtn.addEventListener('click', () => {
            historyStartDateInput.value = '';
            historyEndDateInput.value = '';
            renderTransactionHistory();
        });
    }
    // Delegation for detail and delete buttons within the transaction history table
    if (transactionHistoryTableBody) {
        transactionHistoryTableBody.addEventListener('click', (e) => {
            if (e.target.closest('.view-detail-btn')) {
                const transactionId = e.target.closest('.view-detail-btn').dataset.transactionId;
                viewTransactionDetails(transactionId);
            } else if (e.target.closest('.delete-transaction-btn')) {
                const transactionId = e.target.closest('.delete-transaction-btn').dataset.transactionId;
                deleteTransaction(transactionId);
            }
        });
    }
    if (closeTransactionDetailBtn) {
        closeTransactionDetailBtn.addEventListener('click', closeTransactionDetails);
    }
    // NEW: Event listener for reprint receipt button in transaction detail
    if (reprintReceiptBtn) {
        reprintReceiptBtn.addEventListener('click', () => {
            const transactionId = reprintReceiptBtn.dataset.transactionId;
            if (transactionId) {
                reprintTransactionReceipt(transactionId);
            } else {
                displayStatus("Error: Tidak ada ID transaksi untuk dicetak ulang.", "error");
            }
        });
    }


    // --- Data Import/Export & Reset Event Listeners ---
    if (exportProductsBtn) {
        exportProductsBtn.addEventListener('click', exportProducts);
    }
    if (importProductsBtn) {
        importProductsBtn.addEventListener('click', () => {
            importProductsFileInput.click();
        });
    }
    if (importProductsFileInput) {
        importProductsFileInput.addEventListener('change', importProducts);
    }

    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportAllData);
    }
    if (importDataBtn) {
        importDataBtn.addEventListener('click', () => {
            importFileInput.click();
        });
    }
    if (importFileInput) {
        importFileInput.addEventListener('change', importAllData);
    }
    // Modified resetAllDataBtn to open the new reset confirmation modal
    if (resetAllDataBtn) {
        resetAllDataBtn.addEventListener('click', openResetDataConfirmation);
    }

    // --- Confirmation Modal Event Listeners --
    if (confirmOkBtn) {
        confirmOkBtn.addEventListener('click', () => {
            confirmationModal.classList.add('hidden');
            if (confirmPromiseResolve) confirmPromiseResolve(true);
        });
    }
    if (confirmCancelBtn) {
        confirmCancelBtn.addEventListener('click', () => {
            confirmationModal.classList.add('hidden');
            if (confirmPromiseResolve) confirmPromiseResolve(false);
        });
    }

    // New: Reset Data Modal Event Listeners
    if (resetDataConfirmBtn) {
        resetDataConfirmBtn.addEventListener('click', () => {
            const enteredPassword = resetPasswordInput.value;
            if (enteredPassword === RESET_PASSWORD) {
                performResetAllData(); // Call the actual reset function
                resetDataModal.classList.add('hidden');
                displayStatus("Semua data aplikasi telah direset!", "success");
            } else {
                displayStatus("Kata sandi salah. Reset data dibatalkan.", "error", resetDataMessage);
            }
        });
    }
    if (resetDataCancelBtn) {
        resetDataCancelBtn.addEventListener('click', () => {
            resetDataModal.classList.add('hidden');
            displayStatus("Reset data dibatalkan.", "info");
        });
    }


    // --- Toggle Daily Revenue Visibility Event Listener ---
    if (toggleDailyRevenueVisibilityButton) {
        toggleDailyRevenueVisibilityButton.addEventListener('click', () => {
            isRevenueVisible = !isRevenueVisible; // Toggle the state
            saveRevenueVisibility(); // Save the new state
            updateHeaderDailyRevenue(); // Update display
        });
    }

    // --- User Settings Modal Event Listeners (New) ---
    if (openUserSettingsModalBtn) {
        openUserSettingsModalBtn.addEventListener('click', openUserSettingsModal);
    }
    if (closeUserSettingsModalBtn) {
        closeUserSettingsModalBtn.addEventListener('click', closeUserSettingsModal);
    }
    // Event listener for the main login button on the initial login screen
    if (loginScreenBtn) {
        loginScreenBtn.addEventListener('click', loginUser);
    }
    // Event listener for login button INSIDE the user settings modal
    if (userSettingsLoginButton) {
        userSettingsLoginButton.addEventListener('click', userSettingsLogin);
    }
    if (logoutButton) { // Event listener for the main logout button in the header
        logoutButton.addEventListener('click', logoutUser);
    }
    if (addUserButton) {
        addUserButton.addEventListener('click', addNewUser);
    }
    // Delegate user deletion
    if (userListBody) {
        userListBody.addEventListener('click', (e) => {
            if (e.target.closest('.delete-user-btn')) {
                const username = e.target.closest('.delete-user-btn').dataset.username;
                deleteUser(username);
            }
        });
    }

    // New: Dark Mode Toggle Event Listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            saveDarkModeState(); // Save the new state to localStorage
            applyDarkMode(); // Apply/remove dark-mode class
            // Re-render components that need immediate style updates based on dark mode
            renderTransactionItems(); // To update item list background/text
            renderStoreProducts(searchStoreProductsInput.value); // To update product table
            renderExpenses(); // To update expenses table
            calculateFinancialReport(); // To update chart colors
        });
    }

    // --- Printer Settings Event Listeners (New) ---
    if (openPrinterSettingsBtn) {
        openPrinterSettingsBtn.addEventListener('click', () => {
            printerSettingsModal.classList.remove('hidden');
            adminMenuDropdown.classList.add('hidden'); // Close admin menu if open
            // Ensure printer status is updated when modal opens
            if (bluetoothPrinterDevice && bluetoothPrinterDevice.gatt.connected) {
                updatePrinterConnectionStatus(`Terhubung ke: ${bluetoothPrinterDevice.name || bluetoothPrinterDevice.id}`, true);
            } else {
                updatePrinterConnectionStatus("Silahkan sambungkan printer", false);
            }
        });
    }
    if (closePrinterSettingsModalBtn) {
        closePrinterSettingsModalBtn.addEventListener('click', () => {
            printerSettingsModal.classList.add('hidden');
        });
    }
    if (connectPrinterBtn) {
        connectPrinterBtn.addEventListener('click', connectPrinter);
    }
    if (disconnectPrinterBtn) {
        disconnectPrinterBtn.addEventListener('click', disconnectPrinter);
    }
    if (testPrintBtn) {
        testPrintBtn.addEventListener('click', testPrint);
    }

    // --- Price Calculator Event Listeners (NEW) ---
    if (openPriceCalculatorModalBtn) {
        openPriceCalculatorModalBtn.addEventListener('click', openPriceCalculatorModal);
    }
    if (closePriceCalculatorModalBtn) {
        closePriceCalculatorModalBtn.addEventListener('click', closePriceCalculatorModal);
    }
    if (calculatePriceBtn) {
        calculatePriceBtn.addEventListener('click', calculateSellingPriceAndProfit);
    }
    // Live calculation as inputs change
    if (priceCalcModalInput) priceCalcModalInput.addEventListener('input', calculateSellingPriceAndProfit);
    if (priceCalcMarginPercentInput) priceCalcMarginPercentInput.addEventListener('input', calculateSellingPriceAndProfit);
    if (priceCalcTaxPercentInput) priceCalcTaxPercentInput.addEventListener('input', calculateSellingPriceAndProfit);
    if (priceCalcDiscountPercentInput) priceCalcDiscountPercentInput.addEventListener('input', calculateSellingPriceAndProfit);
    if (priceCalcProductCodeInput) {
        priceCalcProductCodeInput.addEventListener('input', calculateSellingPriceAndProfit); // To trigger validation message
    }

    // Copy buttons
    if (copyProductCodeBtn) {
        copyProductCodeBtn.addEventListener('click', () => {
            copyTextToClipboard(priceCalcProductCodeInput.value, priceCalcStatusMessage);
        });
    }
    if (copySellingPriceBtn) {
        copySellingPriceBtn.addEventListener('click', () => {
            // Remove "Rp " and commas for copying just the number
            const sellingPriceNum = priceCalcSellingPriceInput.value.replace(/[^0-9]/g, '');
            copyTextToClipboard(sellingPriceNum, priceCalcStatusMessage);
        });
    }

    // --- NEW: Nominal Quick Pay Buttons Event Listener ---
    if (nominalButtonsContainer) {
        nominalButtonsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('nominal-btn')) {
                const nominalValue = parseInt(e.target.dataset.nominal);
                if (!isNaN(nominalValue)) {
                    // Get current payment amount, or 0 if empty/invalid
                    let currentPayment = parseFloat(paymentAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0; // Robust parsing
                    // Add the nominal value to the current payment amount
                    paymentAmountInput.value = currentPayment + nominalValue;
                    calculateChange(); // Recalculate change after setting nominal
                }
            }
        });
    }

    // NEW: QR Scanner Event Listeners
    if (startScannerBtn) {
        startScannerBtn.addEventListener('click', startQrScanner);
    }
    if (stopScannerBtn) {
        stopScannerBtn.addEventListener('click', stopQrScanner);
    }

    // Event listener for Enter key on username/password inputs in login screen
    if (loginScreenUsernameInput) {
        loginScreenUsernameInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent default form submission
                loginScreenPasswordInput.focus(); // Move focus to password input
            }
        });
    }

    if (loginScreenPasswordInput) {
        loginScreenPasswordInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevent default form submission
                loginUser(); // Call the login function
            }
        });
    }

    // New: Event listener for payment method select to auto-fill payment amount
    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', function() {
            if (paymentMethodSelect.value === 'QRIS' || paymentMethodSelect.value === 'Transfer Bank') {
                // Set payment amount to total when QRIS or Transfer Bank is selected
                const total = parseFloat(totalAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".")) || 0;
                paymentAmountInput.value = total.toLocaleString('id-ID');
                calculateChange(); // Update change display
                paymentAmountInput.disabled = true; // Disable manual input
            } else {
                // Clear payment amount if switching back to cash or other methods
                paymentAmountInput.value = '0';
                calculateChange(); // Update change display
                paymentAmountInput.disabled = false; // Enable manual input
            }
        });
    }

    // NEW: Daily Report Print Modal Event Listeners
    if (openDailyReportPrintModalBtn) {
        openDailyReportPrintModalBtn.addEventListener('click', () => {
            if (loggedInUser && loggedInUser.role === 'admin') {
                dailyReportPrintModal.classList.remove('hidden');
                adminMenuDropdown.classList.add('hidden'); // Close admin menu if open
                reportPrintDateInput.value = new Date().toISOString().slice(0, 10); // Set default date to today
                dailyReportPrintStatusMessage.classList.add('hidden'); // Clear status
                // Update printer status in this modal too
                if (bluetoothPrinterDevice && bluetoothPrinterDevice.gatt.connected) {
                    dailyReportPrintStatusMessage.textContent = "Printer terhubung. Siap mencetak laporan.";
                    dailyReportPrintStatusMessage.classList.remove('hidden', 'bg-red-700', 'text-red-200');
                    dailyReportPrintStatusMessage.classList.add('bg-green-700', 'text-green-200');
                    printDailyReportBtn.disabled = false;
                } else {
                    dailyReportPrintStatusMessage.textContent = "Printer belum terhubung. Silakan sambungkan printer.";
                    dailyReportPrintStatusMessage.classList.remove('hidden', 'bg-green-700', 'text-green-200');
                    dailyReportPrintStatusMessage.classList.add('bg-red-700', 'text-red-200');
                    printDailyReportBtn.disabled = true;
                }
            } else {
                displayStatus("Akses Ditolak: Anda harus login sebagai Admin untuk mencetak laporan harian.", "error");
                adminMenuDropdown.classList.add('hidden');
            }
        });
    }
    if (closeDailyReportPrintModalBtn) {
        closeDailyReportPrintModalBtn.addEventListener('click', () => {
            dailyReportPrintModal.classList.add('hidden');
            dailyReportPrintStatusMessage.classList.add('hidden'); // Clear status on close
        });
    }
    if (printDailyReportBtn) {
        printDailyReportBtn.addEventListener('click', () => {
            const selectedDate = reportPrintDateInput.value;
            printDailyReport(selectedDate);
        });
    }

    // NEW: Event listener for 'Enter' key to trigger "CETAK STRUK & PROSES" or "PROSES PEMBAYARAN"
    document.addEventListener('keydown', (e) => {
        // Only trigger if the main app container is visible (i.e., user is logged in)
        if (mainAppContainer && !mainAppContainer.classList.contains('hidden')) {
            // Check for SHIFT key press to auto-fill cash payment
            if (e.shiftKey && e.ctrlKey && !e.altKey) {
                e.preventDefault(); // Prevent default SHIFT key behavior
                if (paymentAmountInput && paymentMethodSelect.value === 'Tunai') {
                    // Robustly parse the current value, removing non-numeric characters and handling comma as decimal separator if present
                    let currentPaymentString = paymentAmountInput.value.replace(/[^0-9,-]+/g, "").replace(",", ".");
                    let currentPayment = parseFloat(currentPaymentString) || 0;
                    console.log("Current payment (parsed):", currentPayment);

                    const increment = 50000; // Kelipatan 50.000

                    // Jika currentPayment adalah 0 atau bukan kelipatan 50.000, mulai dari 50.000
                    if (currentPayment === 0 || currentPayment % increment !== 0) {
                        currentPayment = increment;
                        console.log("Setting to initial increment:", currentPayment);
                    }
                    else {
                        currentPayment += increment;
                        console.log("Incrementing payment:", currentPayment);
                    }

                    paymentAmountInput.value = currentPayment.toLocaleString('id-ID');
                    console.log("New payment amount in input:", paymentAmountInput.value);
                    calculateChange();
                } else {
                    console.log("Payment amount input not found or payment method is not 'Tunai'.");
                }
            } else if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault(); // Prevent default Enter key behavior (e.g., form submission)

                // Check if the "CETAK STRUK & PROSES" button is visible and enabled
                if (printReceiptButton && !printReceiptButton.classList.contains('hidden') && !printReceiptButton.disabled) {
                    printReceiptButton.click(); // Simulate click on "CETAK STRUK & PROSES"
                }
                // Check if the "PROSES PEMBAYARAN" button is visible and enabled
                else if (processOnlyPaymentButton && !processOnlyPaymentButton.classList.contains('hidden') && !processOnlyPaymentButton.disabled) {
                    processOnlyPaymentButton.click(); // Simulate click on "PROSES PEMBAYARAN"
                }
            }
        }
    });

});

// Ensure data is saved when the user tries to close the tab/browser
window.addEventListener('beforeunload', () => {
    saveProducts();
    saveTransactionHistory();
    saveExpenses();
    saveUsers(); // Save users and loggedInUser (to sessionStorage) on unload
    saveDailyRevenue();
    saveRevenueVisibility();
    saveDarkModeState(); // New: Save dark mode state on unload
    saveMonthlyFinancialData(); // Save monthly financial data on unload
    // No need to save printer connection here, it's handled by specific printer functions
    // and device objects cannot be directly stored. Only the ID is saved for auto-reconnect.

    // Ensure scanner is stopped on unload
    if (html5QrCodeScanner && typeof html5QrCodeScanner.isScanning === "function" && html5QrCodeScanner.isScanning()) {
        html5QrCodeScanner.stop().catch(err => console.warn("Error stopping scanner on unload:", err));
    }
});

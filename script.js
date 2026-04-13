let toastBox = document.getElementById("toastBox");
let success = document.getElementById("success");
let error = document.getElementById("error");
let warning = document.getElementById("warning");

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

success.addEventListener('click', showSuccessToast);
error.addEventListener('click', showErrorToast);
warning.addEventListener('click', showWarningToast);


function showSuccessToast(){
    showToast("✅ Successfully submitted");
}

function showErrorToast(){
    showToast("❌ Error occured");
}

function showWarningToast(){
    showToast("⚠️ Warning: Invalid input");
}



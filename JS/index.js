// Buttons
const donateButton = getButtonById('donate-button');
const historyButton = getButtonById('history-button');
const noakhaliButton = getButtonById('noakhali-button');
const feniButton = getButtonById('feni-button');
const quotaButton = getButtonById('quota-button');

// History Button
historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-green-600', 'text-white', 'shadow-lg')
    donateButton.classList.remove('bg-green-600', 'text-white', 'shadow-lg')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('h-title').classList.remove('hidden')

})
// Donate Button
donateButton.addEventListener('click', function () {
    donateButton.classList.add('bg-green-600', 'text-white', 'shadow-lg')
    historyButton.classList.remove('bg-green-600', 'text-white', 'shadow-lg')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donate-section').classList.remove('hidden')
    document.getElementById('h-title').classList.add('hidden')

})

// Modal 

document.getElementById('balanceModalClose').addEventListener('click', function () {
    document.getElementById('balanceModal').classList.add('hidden')
    })


// Noakhali Operation
noakhaliButton.addEventListener('click', function () {

    const headerBalance = parseFloat(getInnerTextById('cash-balance'));
    const noakhaliBalance = parseFloat(getInnerTextById('noakhali-balance'));
    const noakhaliInput = getInputValueByID('noakhali-input')

    if (noakhaliInput <= 0 || isNaN(noakhaliInput)) {
        document.getElementById('error-noakhali').classList.remove('hidden')
        document.getElementById('br').classList.add('hidden')
    }
    else {
        if (headerBalance < noakhaliInput) {
            document.getElementById('error-noakhali').classList.add('hidden')
            document.getElementById('error-noakhali-insufficient').classList.remove('hidden')
            document.getElementById('br').classList.add('hidden')
        }
        else {
            document.getElementById('error-noakhali-insufficient').classList.add('hidden')
            document.getElementById('balanceModal').classList.remove('hidden')
            document.getElementById('error-noakhali').classList.add('hidden')
            document.getElementById('br').classList.remove('hidden')
            const newNoakhaliBalance = noakhaliBalance + noakhaliInput;
            document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

            const newHeaderBalance = headerBalance - noakhaliInput;
            document.getElementById('cash-balance').innerText = newHeaderBalance

            const historyList = document.getElementById('history-section');
            const noakhaliH1 = document.getElementById('noakhali-h1').innerText
            const div = document.createElement('div');

            var currentDateTime = new Date();
            var dateTimeString = "Date : " + currentDateTime.toString();

            div.className = 'card bg-white shadow-lg rounded-lg flex md:flex-row overflow-hidden mt-8'
            div.innerHTML = `
                    <figure class="h-32 w-32 lg:w-1/5 md:w-1/3 lg:m-3">
                        <img src="./assets/dlgo.jpg" alt="Donation"
                            class="h-32 w-32 object-cover lg:rounded-lg rounded-tr-lg rounded-tl-lg" />
                    </figure>
                    <div class="p-2 w-full md:w-2/3 lg:w-3/5 flex flex-col justify-between">
                        <div>
                            <div class="bg-green-100 text-green-600 px-1 py-1 rounded-md font-bold mt-2 w-72 pl-2 mb-3">
                                Donation amount : <span id="added-balance-feni">${noakhaliInput}</span> BDT
                            </div>
                            <h2 class="text-xl font-bold mb-2 text-green-800"><span class="font-extrabold"> Donation Fund </span> : ${noakhaliH1}</h2>
                            <p class="text-gray-700 mb-4">${dateTimeString}
                            </p>
                        </div>
                    </div>
    `
            historyList.insertBefore(div, historyList.firstChild)
            document.getElementById('noakhali-input').value = ''
        }
    }
})

// Feni Operation
feniButton.addEventListener('click', function () {

    const headerBalance = parseFloat(getInnerTextById('cash-balance'));
    const feniBalance = parseFloat(getInnerTextById('feni-balance'));
    const feniInput = getInputValueByID('feni-input')

    if (feniInput <= 0 || isNaN(feniInput)) {
        document.getElementById('error-feni').classList.remove('hidden')
        document.getElementById('br').classList.add('hidden')
    }
    else {
        if (headerBalance < feniInput) {
            document.getElementById('error-feni').classList.add('hidden')
            document.getElementById('error-feni-insufficient').classList.remove('hidden')
            document.getElementById('br').classList.add('hidden')
        }
        else {
            
            document.getElementById('error-feni-insufficient').classList.add('hidden')
            document.getElementById('balanceModal').classList.remove('hidden')
            document.getElementById('error-feni').classList.add('hidden')
            document.getElementById('br').classList.remove('hidden')
            const newfeniBalance = feniBalance + feniInput;
            document.getElementById('feni-balance').innerText = newfeniBalance;

            const newHeaderBalance = headerBalance - feniInput;
            document.getElementById('cash-balance').innerText = newHeaderBalance

            const historyList = document.getElementById('history-section');
            const feniH1 = document.getElementById('feni-h1').innerText
            const div = document.createElement('div');

            var currentDateTime = new Date();
            var dateTimeString = "Date : " + currentDateTime.toString();

            div.className = 'card bg-white shadow-lg rounded-lg flex md:flex-row overflow-hidden mt-8'
            div.innerHTML = `
                    <figure class="h-32 w-32 lg:w-1/5 md:w-1/3 lg:m-3">
                        <img src="./assets/dlgo.jpg" alt="Donation"
                            class="h-32 w-32 object-cover lg:rounded-lg rounded-tr-lg rounded-tl-lg" />
                    </figure>
                    <div class="p-2 w-full md:w-2/3 lg:w-3/5 flex flex-col justify-between">
                        <div>
                            <div class="bg-green-100 text-green-600 px-1 py-1 rounded-md font-bold mt-2 w-72 pl-2 mb-3">
                                Donation amount : <span id="added-balance-feni">${feniInput}</span> BDT
                            </div>
                            <h2 class="text-xl font-bold mb-2 text-green-800"><span class="font-extrabold"> Donation Fund </span> : ${feniH1}</h2>
                            <p class="text-gray-700 mb-4">${dateTimeString}
                            </p>
                        </div>
                    </div>
    `
            historyList.insertBefore(div, historyList.firstChild)
            document.getElementById('feni-input').value = ''
        }
    }
})

// Quota Operation
quotaButton.addEventListener('click', function () {

    const headerBalance = parseFloat(getInnerTextById('cash-balance'));
    const quotaBalance = parseFloat(getInnerTextById('quota-balance'));
    const quotaInput = getInputValueByID('quota-input')

    if (quotaInput <= 0 || isNaN(quotaInput)) {
        document.getElementById('error-quota').classList.remove('hidden')
        document.getElementById('br').classList.add('hidden')
    }
    else {
        if (headerBalance < quotaInput) {
            document.getElementById('error-quota').classList.add('hidden')
            document.getElementById('error-quota-insufficient').classList.remove('hidden')
            document.getElementById('br').classList.add('hidden')
        }
        else {
            
            document.getElementById('error-quota-insufficient').classList.add('hidden')
            document.getElementById('balanceModal').classList.remove('hidden')
            document.getElementById('error-quota').classList.add('hidden')
            document.getElementById('br').classList.remove('hidden')
            const newquotaBalance = quotaBalance + quotaInput;
            document.getElementById('quota-balance').innerText = newquotaBalance;

            const newHeaderBalance = headerBalance - quotaInput;
            document.getElementById('cash-balance').innerText = newHeaderBalance

            const historyList = document.getElementById('history-section');
            const quotaH1 = document.getElementById('quota-h1').innerText
            const div = document.createElement('div');

            var currentDateTime = new Date();
            var dateTimeString = "Date : " + currentDateTime.toString();

            div.className = 'card bg-white shadow-lg rounded-lg flex md:flex-row overflow-hidden mt-8'
            div.innerHTML = `
                    <figure class="h-32 w-32 lg:w-1/5 md:w-1/3 lg:m-3">
                        <img src="./assets/dlgo.jpg" alt="Donation"
                            class="h-32 w-32 object-cover lg:rounded-lg rounded-tr-lg rounded-tl-lg" />
                    </figure>
                    <div class="p-2 w-full md:w-2/3 lg:w-3/5 flex flex-col justify-between">
                        <div>
                            <div class="bg-green-100 text-green-600 px-1 py-1 rounded-md font-bold mt-2 w-72 pl-2 mb-3">
                                Donation amount : <span id="added-balance-quota">${quotaInput}</span> BDT
                            </div>
                            <h2 class="text-xl font-bold mb-2 text-green-800"><span class="font-extrabold"> Donation Fund </span> : ${quotaH1}</h2>
                            <p class="text-gray-700 mb-4">${dateTimeString}
                            </p>
                        </div>
                    </div>
    `
            historyList.insertBefore(div, historyList.firstChild)
            document.getElementById('quota-input').value = ''
        }
    }
})





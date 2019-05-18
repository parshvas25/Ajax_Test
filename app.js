document.getElementById('button').addEventListener('click', getinfo)

function getinfo() {
  const xhr = new XMLHttpRequest()

// Opens the data file stored and true is set because we want this done asynchronously
  xhr.open("GET", "data.txt", true )
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText)
    }
    else{
      console.log('An error occured')
    }

  }

  }

}

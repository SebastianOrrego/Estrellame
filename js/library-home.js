function send(i)
{
  if (!document.getElementById("send-stars").className.match(/(?:^|\s)send-stars-hover(?!\S)/))
  {
    switch (i) {
      case 1:
        document.getElementById('star').setAttribute("src", 'img/star-blue.svg');
        break;
      case 2:
        document.getElementById('star').setAttribute("src", 'img/star-violet.svg');
        break;
      case 3:
        document.getElementById('star').setAttribute("src", 'img/star-red.svg');
        break;
      case 4:
        document.getElementById('star').setAttribute("src", 'img/star-orange.svg');
        break;
      case 5:
        document.getElementById('star').setAttribute("src", 'img/star-yellow.svg');
        break;
      case 6:
        document.getElementById('star').setAttribute("src", 'img/star-green.svg');
        break;
      default:
        break;
    }
    return document.getElementById('send-stars').className = 'send-stars-hover';
  }
  else
  {
    switch (i) {
      case 1:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-blue.svg');
        break;
      case 2:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-violet.svg');
        break;
      case 3:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-red.svg');
        break;
      case 4:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-orange.svg');
        break;
      case 5:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-yellow.svg');
        break;
      case 6:
        document.getElementById('star').removeAttribute("src");
        return document.getElementById('star').setAttribute("src", 'img/star-green.svg');
        break;
      default:
        break;
    }
  }
}

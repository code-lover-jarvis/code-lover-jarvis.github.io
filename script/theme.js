function changetheme(value)
{
  document.cookie = "theme="+value+"; SameSite=Lax"
  for(let i=0; i<document.getElementsByTagName('link').length; i++)
  {
    if((document.getElementsByTagName('link')[i].getAttribute('href') == 'style/style.css')||(document.getElementsByTagName('link')[i].getAttribute('href') == 'style/dark.css')||(document.getElementsByTagName('link')[i].getAttribute('href') == 'style/night.css'))
    {
      if(value == 'dark')
      {
        document.getElementsByTagName('link')[i].setAttribute('href', 'style/dark.css');
      }else if (value == 'light')
      {
        document.getElementsByTagName('link')[i].setAttribute('href', 'style/style.css');
      }else if (value == 'night')
      {
        document.getElementsByTagName('link')[i].setAttribute('href', 'style/night.css');
      }
    }
  }
}

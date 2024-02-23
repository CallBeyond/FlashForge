const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };

  router.post('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});
  
  document.querySelector('#logout').addEventListener('click', logout);
  
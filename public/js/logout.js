const logout = async () => {
  try {
      const response = await fetch('/api/users/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
          document.location.replace('/');
          console.log('logout button clicked');
      } else {
          throw new Error('Failed to log out.');
      }
  } catch (error) {
      console.error(error);
      alert('Failed to log out.');
  }
};

  document.querySelector('#logout').addEventListener('click', logout);

  
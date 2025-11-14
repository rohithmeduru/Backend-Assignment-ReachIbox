document.addEventListener('DOMContentLoaded', function() {
    const signinButton1 = document.getElementById('signin-btn-google');
  
    signinButton1.addEventListener('click', function() {
      
      window.location.href = 'https://DK-reachinbox-assignment.onrender.com/auth/google';
    });

    const signinButton2 = document.getElementById('signin-btn-ms');
  
    signinButton2.addEventListener('click', function() {
      
      window.location.href = 'https://DK-reachinbox-assignment.onrender.com/outlook/signin';
    });
  });
  

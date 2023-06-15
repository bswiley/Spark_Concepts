res.render('spark', {
    concepts,
    logged_in: req.session.logged_in,
  });
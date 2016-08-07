users = User.create([
  {username: "guest",
    pen_name: "Guest User",
    password: "password"
  },

  {username: "wirving",
    pen_name: "Washington Irving",
    password: "password",
    avatar: File.new('app/assets/images/washington-irving.jpg')
  },

  {username: "iasimov",
    pen_name: "Isaac Asimov",
    password: "password",
    avatar: File.new('app/assets/images/isaac-asimov.jpg')
  },

  {username: "rbradbury",
    pen_name: "Ray Bradbury",
    password: "password",
    avatar: File.new('app/assets/images/ray-bradbury.jpg')
  },

  {username: "sking",
    pen_name: "Stephen King",
    password: "password",
    avatar: File.new('app/assets/images/stephen-king.jpg')
  },

  {username: "jdsalinger",
    pen_name: "J.D. Salinger",
    password: "password",
    avatar: File.new('app/assets/images/jd-salinger.jpg')
  },

  {username: "ohenry",
    pen_name: "O. Henry",
    password: "password",
    avatar: File.new('app/assets/images/o-henry.jpg')
  },

  {username: "jupdike",
    pen_name: "John Updike",
    password: "password",
    avatar: File.new('app/assets/images/john-updike.jpg')
  },

])

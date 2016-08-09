users = User.create([
  {username: "guest",
    pen_name: "Guest User",
    password: "password",
    description: "description goes here I think."
  },

  {username: "wirving",
    pen_name: "Washington Irving",
    password: "password",
    avatar: File.new('app/assets/images/washington-irving.jpg'),
    description: "description goes here I think."
  },

  {username: "iasimov",
    pen_name: "Isaac Asimov",
    password: "password",
    avatar: File.new('app/assets/images/isaac-asimov.jpg'),
    description: "description goes here I think."
  },

  {username: "rbradbury",
    pen_name: "Ray Bradbury",
    password: "password",
    avatar: File.new('app/assets/images/ray-bradbury.jpg'),
    description: "description goes here I think."
  },

  {username: "sking",
    pen_name: "Stephen King",
    password: "password",
    avatar: File.new('app/assets/images/stephen-king.jpg'),
    description: "description goes here I think."
  },

  {username: "jdsalinger",
    pen_name: "J.D. Salinger",
    password: "password",
    avatar: File.new('app/assets/images/jd-salinger.jpg'),
    description: "Jerome David Salinger. You honestly should know who I am."
  },

  {username: "ohenry",
    pen_name: "O. Henry",
    password: "password",
    avatar: File.new('app/assets/images/o-henry.jpg'),
    description: "description goes here I think."
  },

  {username: "jupdike",
    pen_name: "John Updike",
    password: "password",
    avatar: File.new('app/assets/images/john-updike.jpg'),
    description: "description goes here I think."
  },

])

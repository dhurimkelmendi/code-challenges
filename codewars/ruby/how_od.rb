def calculate_age(year_of_birth, current_year)
    if year_of_birth < current_year
      age = current_year - year_of_birth
      pluralized = plural(age)
        "You are #{age} #{pluralized} old."
    elsif year_of_birth > current_year
      born_in = year_of_birth - current_year
      pluralized = plural(born_in)
      "You will be born in #{born_in} #{pluralized}."
    else
      "You were born this very year!"
    end
  end
  def plural(n)
    if n > 1
      'years'
    else
      'year'
    end
end
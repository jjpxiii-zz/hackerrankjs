defmodule Solution do
  def remove(s) do
    Regex.replace(~r/(!*.*)[^!*]$/, s, "")
  end
end
IO.puts Solution.remove("!!Hi! Hi!")
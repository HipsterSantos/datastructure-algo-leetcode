# Parentheses: “(” and “)”
# • Braces: “{” and “}”
# • Brackets: “[” and “]”

def is_matched(expr):
    lefty = '({['
    righty = ')}]'
    s = ArrayStack()
    for c in expr:
        if c in lefty:
            s.push(c)
        elif c in righty:
            if s.is_empty():
                return False
            if righty.index(c) != lefty.index(s.pop()):
                return False
            return s.is_empty()

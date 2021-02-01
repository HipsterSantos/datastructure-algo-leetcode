#Time: O(N)
#Space: O(1)

class Solution:
    def alphabetBoardPath(self, target: str) -> str:
        seq = []
        r, c = 0, 0
        for char in target:
            r, c = self.move_to(char, r, c, seq)

        return "".join(seq)

    def move_to(self, char, r, c, seq):
        next_r, next_c = self.find_char_pos(char)

        delta_r = next_r - r
        delta_c = next_c - c

        vertical_move = ""
        if delta_r < 0:
            vertical_move = "U" * -delta_r
        elif delta_r > 0:
            vertical_move = "D" * delta_r

        horizontal_move = ""
        if delta_c < 0:
            horizontal_move = "L" * -delta_c
        elif delta_c > 0:
            horizontal_move = "R" * delta_c

        if r == 5:
            seq.append(vertical_move)
            seq.append(horizontal_move)
        else:
            seq.append(horizontal_move)
            seq.append(vertical_move)

        seq.append("!")
        return next_r, next_c

    def find_char_pos(self, char):
        char_indx = ord(char) - ord('a')
        r = char_indx // 5
        c = char_indx % 5
        return r, c


c = Solution()
c.alphabetBoardPath('leet')
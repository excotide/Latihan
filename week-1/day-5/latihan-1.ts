const tampilkaNIlai = (input: number | string) => {
    typeof input === "string" ? console.log(input) : console.log(input);
};

tampilkaNIlai("labiq");
tampilkaNIlai(90);
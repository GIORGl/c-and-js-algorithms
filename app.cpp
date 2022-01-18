#include <iostream>
#include <string>
#include <map>
#include <tuple>
#include <set>
#include <vector>
using namespace std;

// COUT
// int  main()
// {
//     cout  <<  "Hello!" << endl;
//     cout << "world";

// }

// BASIC DATA TYPES
//   int
//    float
//    string
//    bool
//    char

//  VARIABLES
// int main()
// {

//     int x = 4;

//     string y = "giorgi";

//     cout << x << endl;
//     cout << y;
// }

// CIN COUT IGNORE CLEAR
// int main()
// {
//     const float gravity = -9.8;
//     int n, x;
//     cin >> n;
//     cout << n << endl;
//     cin.clear();
//     cin.ignore(1000,'\n');
//     cin >> x;
//     cout << x << endl;

// }

// CALCULATOR PROGRAM
// int main()
// {
//     int num1, num2;

//     cout << "Enter a  1st number: ";
//     cin >> num1;
//     cin.clear();
//     cin.ignore(1000,'\n');
//     cout << "Enter a  2nd number: ";
//     cin >> num2;

//     int sum = num1 + num2;

//     cout <<"The sum is: " << sum << endl;
// }

//arrays
// int main()
// {
//     int arr[] = {1, 2, 4, 3};
//     arr[0] = 10;
//     cout << arr[0] << endl;

//     //size of an array

//     cout << sizeof(arr)/ sizeof(arr[0]);
// }

// For loops
// int main()
// {
//     // for (int i = 0; i < 10; i++)
//     // {
//     //     cout << i << endl;
//     // }

//     //loop through the array

//     int x[] {1,2,3,4,5,6,7,8,9,10};

//     for(int i = 0; i < sizeof(x)/sizeof(x[0]); i++) {
//         cout << x[i] << endl;
//     }
// }

//While loop

// int main()
// {
//     int input;

//     while (input != 12)
//     {
//         cout << "type the number 12" << endl;

//         cin >> input;
//     }

//     //or

//     while (true)
//     {
//         cout << "type the number 12" << endl;

//         cin >> input;

//         if (input == 12)
//         {
//             break;
//         }
//     }

// }

//do While loop

// int main() {
//     int x = 2;

//     do {
//         int add;
//         cout << "Type a number to add to x: " << endl;

//         cin>> add;

//         x += add;

//         cout << "x is: " << x << endl;

//     } while (x < 10);

// }

//Switch statement

// int main()
// {
//     int x = 5;

//     switch (x + 1)
//     {
//     case 1:
//         cout << "cool";
//         break;
//     case 2:
//         cout << "not cool";
//         break;

//     case 3:
//         cout << "lol";
//         break;

//         default:
//         cout << "default";
//     }
// }

//Referances

// int main()
// {
//     int a = 2;
//     int &b = a;
//     int &c = b;

//     c = 7;

//     cout << a << endl;
//     cout << b << endl;

//     cout << c << endl;
// }

//Pointers

// int main()
// {

//     int x[] = {1, 2, 3};
//     int *head = x;

//     for(int i = 0; i < 3; i++) {
//         head = x + i;

//         cout << *head << endl;
//     }

// }

// tuples

// int main()
// {
//     tuple<int, string> person(20, "Tim");

//     cout << get<1>(person) << endl;

//     get<1>(person) = "Billy";

//     cout << get<1>(person) << endl;

//     //swap tuples

//     tuple<int, int> t1 = make_tuple(1, 2);
//     tuple<int, int> t2 = make_tuple(3, 4);

//     t1.swap(t2);

//     //decompose tuple
//     int x, y;
//     tie(x, y) = t1;

//     cout << x << y << endl;

//     // tuple concationation
//     tuple<int, string> first(1, "lds");

//     tuple<char, float> second('d', 12.1);

//     auto t3 = tuple_cat(first, second);
// }

// maps

// int main()
// {

//     map<char, int> mp = {
//         {'A', 1},
//         {'B', 2},
//         {'C', 3}};

//     // cout << mp['A'] << endl;

//     //inseting into the map

//     mp['J'] = 10;
//     pair<char, int> p1('S', 5);
//     mp.insert(p1);

//     // cout << mp['J'] << endl;

//     //erase an element from a map

//     // mp.erase('J');

//     //clear a map

//     // mp.clear();

//     //check if a map is empty

//     mp.empty(); //return a BOOL

//     //size of a map

//     mp.size();

//     //how  to iterrate over the map
//     for (auto itr = mp.begin(); itr != mp.end(); itr++)
//     {

//         cout << itr -> first << endl;
//         cout << (*itr).second << endl;
//     }

// }

//frequency problem with maps

// int main()
// {
//     string test = "Hello world my name is tim! ttthaaaa";

//     map<char, int> freq;

//     for (int i = 0; i < test.length(); ++i)
//     {
//         char letter = test[i];

//       if(freq.find(letter) == freq.end()) {
//           freq[letter] = 0;
//       }

//       freq[letter]++;

//     }

//     for(auto itr = freq.begin(); itr != freq.end(); ++itr) {
//         cout << itr -> first << ": " << itr -> second << endl;
//     }
// }

//vector

// int main()
// {
//     vector<int> v1 = {1, 2, 3};

//     cout << v1[1] << endl;

//     cout << v1.front() << endl;

//     cout << v1.back() << endl;

//     //number of elements in the vector

//     v1.size();

//     //capacity

//     v1.capacity();

//     //add elements

//     v1.push_back(9);

//     //remove from the end

//     v1.pop_back();

//     //shrink capacity

//     // v1.shrink_to_fit(); //capacity = size

//     //insert elements

//     // v1.insert(v1.begin() + 1 10);

//     //delete element

//     // v1.erase(v1.begin() + 2);
// }

//sets

int main()
{
    // set<char> s1 = {'C', 'D', 'C', 'D', 'a', 'b'};

    // for (auto itr = s1.begin(); itr != s1.end(); itr++)
    // {
    //     cout << *itr << endl;
    // }

    string test = "this is a new dsdsdsdsd!!!!";
    string find = "hello"

        set<char>
            exists;

    // for (int i = 0; i < test.length(); ++i)
    // {
    //     char letter = test[i];

    //     exists.insert(letter);
    // }

    // for(auto itr = exists.begin(); itr != exists.end(); ++itr) {
    //     cout << *itr << endl;
    // }

    set<char> findLetters;

    for (int i = 0; i < find.length(); i++)
    {
        char letter = find[i]

                      findLetters.insert(letter);
    }

    for (auto itr = test.begin(); itr != test.end(); ++itr)
    {
        char letter = test[itr];

        findLetters.erase(letter);
    }

    if (findLetters.size() > 0)
    {
        cout << "No it doen't" << endl;
    }
    else
    {
        cout << "yes it does" << endl;
    }
}
// Copyright 2024 kavikumar
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.API_KEY; // your api key
  // TODO: Have to modify the limit and active based on the requirement
  const LIMIT = 2;
  const ACTIVE = true;
  const response = await fetch(
    `https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}&active=${ACTIVE}`,
    {
      headers: {
        "api-key": `${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data); // get the data from the response
  return NextResponse.json(data);
}

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import type NodeFetchCache from "node-fetch-cache";

declare namespace App {
	interface Locals {
		fetch: ReturnType<NodeFetchCache["create"]>;
	}
}
